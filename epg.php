<?php
/**
 * epg.php — Endpoint JSON per l'EPG
 * Restituisce il contenuto aggiornato di guida_tv_sky.json come JSON puro.
 * Usato dal fetch() in background di index.php e guida.php.
 */

session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    http_response_code(401);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'Non autorizzato']);
    exit;
}

$epg_file = __DIR__ . '/guida_tv_sky.json';

// Controllo Lazy Refresh: se il file non esiste o è più vecchio di 2 ore (7200 secondi), lo aggiorna
if (!file_exists($epg_file) || (time() - filemtime($epg_file)) > 7200) {
    // Lock preventivo: aggiorna la data di modifica del file prima di iniziare lo scraping.
    if (file_exists($epg_file)) {
        touch($epg_file);
    } else {
        // Se non esiste, crea un file vuoto temporaneo per fare il lock
        file_put_contents($epg_file, '[]');
    }

    // Eseguiamo lo scraper in modalità tollerante ai timeout
    ini_set('max_execution_time', 120);
    ini_set('memory_limit', '256M');
    
    // PROTEZIONE DI SICUREZZA: Disabilitiamo la stampa a video di avvisi/errori
    // e usiamo l'output buffering per evitare che qualsiasi log sporchi la risposta JSON.
    $old_display = ini_get('display_errors');
    $old_reporting = error_reporting();
    ini_set('display_errors', 0);
    error_reporting(0);
    ob_start();
    
    try {
        require_once __DIR__ . '/scraper_sky.php';
        $scraper = new SkyScraper();
        $scraper->run();
    } catch (Throwable $e) {
        // Ignora l'errore per non bloccare l'output della pagina
    }
    
    ob_end_clean(); // Pulisce e distrugge il buffer di output (elimina ogni warning spurio)
    ini_set('display_errors', $old_display);
    error_reporting($old_reporting);
}

// Header HTTP
header('Content-Type: application/json; charset=utf-8');

// Cache: il browser può tenere la risposta per 60 secondi
header('Cache-Control: public, max-age=60');

if (!file_exists($epg_file)) {
    http_response_code(404);
    echo json_encode(['error' => 'EPG file not found']);
    exit;
}

// Legge e restituisce direttamente il JSON (già formattato dallo scraper)
$json = file_get_contents($epg_file);

// Verifica che sia JSON valido
$data = json_decode($json);
if ($data === null) {
    http_response_code(500);
    echo json_encode(['error' => 'EPG file is not valid JSON']);
    exit;
}

// Aggiunge header con timestamp ultimo aggiornamento
header('X-EPG-Updated: ' . date('H:i', filemtime($epg_file)));
header('X-EPG-Channels: ' . count($data));

echo $json;
