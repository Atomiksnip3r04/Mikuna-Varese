// Compact FAQ functionality
function toggleCompactFAQ(element) {
    const faqItem = element.closest('.compact-faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.compact-faq-item.active').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current item
    faqItem.classList.toggle('active', !isActive);
}

// FAQ Search functionality
function initFAQSearch() {
    const searchInput = document.getElementById('faq-search');
    const faqList = document.getElementById('faq-list');
    const faqItems = document.querySelectorAll('.compact-faq-item');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        faqItems.forEach(item => {
            const question = item.querySelector('.compact-faq-question span').textContent.toLowerCase();
            const answer = item.querySelector('.compact-faq-answer p').textContent.toLowerCase();
            const keywords = item.getAttribute('data-keywords') || '';
            
            const matches = searchTerm === '' || 
                          question.includes(searchTerm) || 
                          answer.includes(searchTerm) || 
                          keywords.toLowerCase().includes(searchTerm);
            
            if (matches) {
                item.classList.remove('hidden');
                // Highlight search term if found
                if (searchTerm && question.includes(searchTerm)) {
                    item.style.order = '-1'; // Move matching items to top
                }
            } else {
                item.classList.add('hidden');
                item.classList.remove('active'); // Close hidden items
            }
        });
        
        // Show "no results" message if needed
        const visibleItems = document.querySelectorAll('.compact-faq-item:not(.hidden)');
        let noResultsMsg = document.getElementById('no-results-message');
        
        if (visibleItems.length === 0 && searchTerm) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.id = 'no-results-message';
                noResultsMsg.className = 'no-results-message';
                noResultsMsg.innerHTML = '<p>Nessuna domanda trovata. Prova con termini diversi.</p>';
                faqList.appendChild(noResultsMsg);
            }
            noResultsMsg.style.display = 'block';
        } else if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
    });
}

// Initialize FAQ search when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initFAQSearch();
});

// Sistema di traduzione multilingue
const translations = {
    it: {
        // Navigation
        'nav-subtitle': 'Ristorante Peruviano',
        'nav-home': 'Home',
        'nav-about': 'Chi Siamo',
        'nav-menu': 'Menù',

        'nav-contact': 'Contatti',
        'nav-booking': 'Prenota',
        
        // Hero Section
        'hero-title': 'Benvenuti da Mikuna',
        'hero-subtitle': 'Autentica cucina peruviana nel cuore di Varese, Lombardia',
        'hero-description': 'Scopri i sapori tradizionali del Perù nel centro di Varese, vicino al Lago Maggiore. Ceviche, Lomo Saltado e specialità andine con ingredienti freschi e ricette tramandate da generazioni nelle terre inca.',
        'hero-menu-btn': 'Scopri il Menù',
        'hero-booking-btn': 'Prenota Ora',

        
        // Specialties
        'specialties-title': 'Le Nostre Specialità',
        'specialties-subtitle': 'Piatti autentici preparati con passione e ingredienti di qualità',
        'dish-1-name': 'Ceviche Mixto',
        'dish-1-desc': 'Pesce fresco marinato nel lime con cipolla rossa e peperoncino',
        'dish-2-name': 'Lomo Saltado',
        'dish-2-desc': 'Manzo saltato con cipolla, pomodoro e patate fritte',
        'dish-3-name': 'Ají de Gallina',
        'dish-3-desc': 'Pollo in salsa cremosa di ají amarillo con noci',
        'dish-4-name': 'Anticuchos',
        'dish-4-desc': 'Spiedini di manzo marinati in salsa di ají panca',
        'dish-5-name': 'Pisco Sour',
        'dish-5-desc': 'Il cocktail nazionale del Perù con pisco, lime e albume',
        
        // About Preview
        'about-preview-title': 'La Nostra Storia',
        'about-preview-text1': 'Un angolo di Perù nel cuore di Varese. Mikuna nasce dal sogno di condividere i veri sapori della cucina peruviana, portando a Varese piatti preparati secondo la tradizione, con ingredienti selezionati e molta esperienza gastronomica dalla città di Huancayo.',
        'about-preview-text2': 'Ogni ricetta racconta una storia di famiglia, cultura e passione, per offrire un viaggio autentico tra i profumi e i colori del Perù. Mikuna non è solo un ristorante, ma un invito a scoprire un mondo di gusto e accoglienza.',
        'about-preview-btn': 'Scopri di più',
        
        // Info Section
        'info-location-title': 'Dove Siamo',
        'info-location-text': 'Via Giulio Bizzozero 18, 21100, Varese',
        'info-hours-title': 'Orari di Apertura',
        'info-hours-text': 'Dom: 12-15, 19-22<br>Lun, Mer-Sab: 12-15, 19-22<br>Martedì: Chiuso',
        'info-contact-title': 'Contatti',
        
        // Footer
        'footer-description': 'Autentica cucina peruviana nel cuore di Varese. Vieni a scoprire i sapori del Perù in un ambiente accogliente e familiare.',
        'footer-links-title': 'Link Utili',
        'footer-contact-title': 'Contatti',
        'footer-rights': 'Tutti i diritti riservati.',
        
        // About Page
        'about-hero-title': 'La Nostra Storia',
        'about-hero-subtitle': 'Un viaggio culinario dal Perù a Varese',
        'story-title': 'Da Huancayo a Varese',
        'story-text1': 'Mikuna nasce dal sogno di condividere l\'autentica cucina peruviana con la comunità di Varese. Il nostro nome, che in quechua significa "cibo", rappresenta l\'essenza della nostra missione: portare i veri sapori del Perù sulle tavole italiane, con radici a Huancayo.',
        'story-text2': 'La nostra avventura inizia da Huancayo, dove ogni piatto racconta una storia millenaria di tradizioni culinarie che si tramandano di generazione in generazione. Nel 2023, abbiamo deciso di aprire le porte del nostro ristorante nel cuore di Varese, in Via Giulio Bizzozero 18, 21100, Varese.',
        'story-text3': 'Ogni ingrediente è selezionato con cura, ogni ricetta è preparata seguendo le antiche tradizioni peruviane. Il nostro obiettivo è offrire un\'esperienza culinaria autentica che trasporti i nostri ospiti in un viaggio attraverso i sapori del Perù.',
        'story-image-caption': 'Le radici della nostra cucina affondano nelle terre del Perù',
        'mission-title': 'La Nostra Missione',
        'mission-subtitle': 'Portare l\'autentica esperienza culinaria peruviana nel cuore di Varese',
        'mission-1-title': 'Autenticità',
        'mission-1-desc': 'Ogni piatto è preparato seguendo le ricette tradizionali peruviane, utilizzando ingredienti autentici importati direttamente dal Perù.',
        'mission-2-title': 'Qualità',
        'mission-2-desc': 'Selezioniamo solo i migliori ingredienti freschi, rispettando la stagionalità e privilegiando fornitori locali quando possibile.',
        'mission-3-title': 'Ospitalità',
        'mission-3-desc': 'Accogliamo ogni ospite come parte della nostra famiglia, creando un\'atmosfera calda e familiare tipica della cultura peruviana.',
        'team-title': 'Il Nostro Team',
        'team-subtitle': 'Le persone che rendono possibile l\'esperienza Mikuna',
        'chef-name': 'Chef Carlos Mendoza',
        'chef-role': 'Executive Chef',
        'chef-bio': 'Nato a Lima, Carlos ha portato a Mikuna oltre 15 anni di esperienza nella cucina peruviana tradizionale. La sua passione per i sapori autentici è il cuore della nostra proposta culinaria.',
        'manager-name': 'Maria Gonzalez',
        'manager-role': 'Restaurant Manager',
        'manager-bio': 'Con la sua esperienza nell\'hospitality e la sua passione per la cultura peruviana, Maria si assicura che ogni ospite viva un\'esperienza indimenticabile da Mikuna.',
        'values-title': 'I Nostri Valori',
        'value-1-title': 'Tradizione',
        'value-1-desc': 'Rispettiamo e preserviamo le ricette tradizionali peruviane',
        'value-2-title': 'Sostenibilità',
        'value-2-desc': 'Sosteniamo pratiche sostenibili e il commercio equo',
        'value-3-title': 'Comunità',
        'value-3-desc': 'Siamo parte della comunità di Varese e la serviamo con orgoglio',
        'cta-title': 'Vieni a Scoprire la Nostra Storia',
        'cta-text': 'Ti aspettiamo da Mikuna per condividere con te la passione per la cucina peruviana e farti vivere un\'esperienza culinaria autentica nel cuore di Varese.',
        'cta-menu-btn': 'Scopri il Menu',
        'cta-booking-btn': 'Prenota un Tavolo',
        
        // Menu Page
        'menu-hero-title': 'Il Nostro Menù',
        'menu-hero-subtitle': 'Autentica cucina peruviana nel cuore di Varese',
        'menu-nav-appetizers': 'Antipasti',
        'menu-nav-fish': 'Pesce',
        'menu-nav-meat': 'Carne',
        'menu-nav-vegetarian': 'Vegetariani',
        'menu-nav-drinks': 'Bevande',
        'menu-nav-desserts': 'Dolci',
        'menu-appetizers-title': 'Antipasti',
        'menu-appetizers-subtitle': 'Iniziate il vostro viaggio culinario con i nostri antipasti tradizionali',
        'appetizer-1-name': 'Anticuchos de Corazón',
        'appetizer-1-desc': 'Spiedini di cuore di manzo marinati in salsa di ají panca, serviti con salsa huacatay e choclo',
        'appetizer-2-name': 'Causa Limeña',
        'appetizer-2-desc': 'Strati di purè di patate gialle condite con lime e ají, farcite con tonno, maionese e avocado',
        'appetizer-3-name': 'Papa Rellena',
        'appetizer-3-desc': 'Crocchette di patate ripiene di carne macinata speziata, servite con salsa criolla',
        'menu-fish-title': 'Specialità di Pesce',
        'menu-fish-subtitle': 'I tesori del mare peruviano preparati con maestria',
        'fish-1-name': 'Ceviche Mixto',
        'fish-1-desc': 'Pesce bianco e frutti di mare marinati nel lime, con cipolla rossa, sedano, peperoncino e coriandolo',
        'fish-2-name': 'Tiradito de Pescado',
        'fish-2-desc': 'Sottili fette di pesce crudo condite con salsa di ají amarillo, lime e olio d\'oliva',
        'fish-3-name': 'Pescado a lo Macho',
        'fish-3-desc': 'Filetto di pesce grigliato con salsa piccante ai frutti di mare, servito con riso bianco',
        'menu-meat-title': 'Specialità di Carne',
        'menu-meat-subtitle': 'Piatti sostanziosi che celebrano le tradizioni delle Ande',
        'meat-1-name': 'Lomo Saltado',
        'meat-1-desc': 'Straccetti di manzo saltati con cipolla, pomodori e patate fritte, serviti con riso bianco',
        'meat-2-name': 'Ají de Gallina',
        'meat-2-desc': 'Pollo sfilacciato in cremosa salsa di ají amarillo con noci, servito con riso e patate bollite',
        'meat-3-name': 'Cabrito Norteño',
        'meat-3-desc': 'Capretto stufato con coriandolo e chicha de jora, servito con fagioli canari e riso',
        'menu-vegetarian-title': 'Piatti Vegetariani',
        'menu-vegetarian-subtitle': 'Sapori vegetali della tradizione peruviana',
        'vegetarian-1-name': 'Quinoa Chaufa',
        'vegetarian-1-desc': 'Quinoa saltata con verdure miste, salsa di soia e uova, stile chifa peruviano',
        'vegetarian-2-name': 'Rocoto Relleno',
        'vegetarian-2-desc': 'Peperoni rocoto ripieni di quinoa, verdure e formaggio, gratinati al forno',
        'menu-drinks-title': 'Bevande',
        'menu-drinks-subtitle': 'Cocktail tradizionali e bevande analcoliche del Perù',
        'drink-1-name': 'Pisco Sour',
        'drink-1-desc': 'Il cocktail nazionale del Perù: pisco, succo di lime, sciroppo, albume e angostura',
        'drink-2-name': 'Chicha Morada',
        'drink-2-desc': 'Bevanda tradizionale a base di mais viola, cannella, chiodi di garofano e frutta',
        'drink-3-name': 'Inca Kola',
        'drink-3-desc': 'La bevanda gassata dorata del Perù, dal sapore unico e inconfondibile',
        'menu-desserts-title': 'Dolci',
        'menu-desserts-subtitle': 'Dolci tradizionali per concludere in dolcezza',
        'dessert-1-name': 'Suspiro de Limeña',
        'dessert-1-desc': 'Dolce tradizionale di Lima con manjar blanco e meringa al porto',
        'dessert-2-name': 'Picarones',
        'dessert-2-desc': 'Ciambelle di zucca e patate dolci fritte, servite con miele di chancaca',
        'menu-cta-title': 'Pronto a Gustare i Sapori del Perù?',
        'menu-cta-text': 'Prenota il tuo tavolo da Mikuna e lasciati trasportare in un viaggio culinario attraverso i sapori autentici della tradizione peruviana.',
        'menu-cta-booking-btn': 'Prenota Ora',
        'menu-cta-contact-btn': 'Contattaci',
        'tag-spicy': 'Piccante',
        'tag-cold': 'Freddo',
        'tag-fried': 'Fritto',
        'tag-signature': 'Specialità',
        'tag-fresh': 'Fresco',
        'tag-raw': 'Crudo',
        'tag-grilled': 'Grigliato',
        'tag-mild': 'Delicato',
        'tag-traditional': 'Tradizionale',
        'tag-vegetarian': 'Vegetariano',
        'tag-protein': 'Proteico',
        'tag-baked': 'Al Forno',
        'tag-cocktail': 'Cocktail',
        'tag-non-alcoholic': 'Analcolico',
        'tag-sweet': 'Dolce',
        'tag-sauteed': 'Saltato',
        
        // Contact Page
        'contact-hero-title': 'Contatti',
        'contact-hero-subtitle': 'Siamo qui per accoglierti e farti vivere un\'esperienza indimenticabile',
        'contact-address-title': 'Indirizzo',
        'contact-directions': 'Ottieni indicazioni',
        'contact-phone-title': 'Telefono',
        'contact-whatsapp': 'Scrivici su WhatsApp',
        'contact-email-title': 'Email',
        'contact-email-note': 'Ti risponderemo entro 24 ore',
        'contact-hours-title': 'Orari di Apertura',
        'contact-hours-tue-sun': 'Martedì - Domenica',
        'contact-hours-monday': 'Lunedì',
        'contact-hours-closed': 'Chiuso',
        'contact-hours-note': 'Consigliamo sempre di prenotare',
        'contact-map-title': 'Come Raggiungerci',
        'contact-map-subtitle': 'Siamo situati nel centro di Varese, facilmente raggiungibili',
        'contact-open-maps': 'Apri in Google Maps',
        'transport-title': 'Come Arrivare',
        'transport-subtitle': 'Informazioni utili per raggiungerci con diversi mezzi di trasporto',
        'transport-car-title': 'In Auto',
        'transport-car-info': '<li>Parcheggio disponibile nelle vicinanze</li><li>A 5 minuti dal centro di Varese</li><li>Facilmente raggiungibile dall\'autostrada A8</li>',
        'transport-train-title': 'In Treno',
        'transport-train-info': '<li>Stazione Varese: 10 minuti a piedi</li><li>Collegamenti diretti da Milano</li><li>Linea regionale Lombardia</li>',
        'transport-bus-title': 'In Autobus',
        'transport-bus-info': '<li>Fermata "Bizzozzero": 2 minuti a piedi</li><li>Linee urbane 1, 4 e 7</li><li>Collegamento con stazione ferroviaria</li>',
        'transport-walk-title': 'A Piedi',
        'transport-walk-info': '<li>5 minuti dal centro storico</li><li>Percorso pedonale sicuro</li><li>Zona ben illuminata</li>',
        'social-title': 'Seguici sui Social',
        'social-subtitle': 'Resta aggiornato su eventi, novità del menu e offerte speciali',
        'social-facebook': 'Foto dei piatti e aggiornamenti',
        'social-instagram': 'Stories e contenuti esclusivi',
        'social-tripadvisor': 'Recensioni e valutazioni',
        'online-services-title': 'Ordina e Prenota Online',
        'online-services-subtitle': 'Scopri i nostri partner per ordinare a casa o prenotare il tuo tavolo',
        'service-deliveroo': 'Ordina i nostri piatti a casa',
        'service-thefork': 'Prenota il tuo tavolo facilmente',
        'service-delivery-tag': 'Consegna a domicilio',
        'service-booking-tag': 'Prenotazione online',
        'faq-search-placeholder': 'Cerca una domanda...',
        'faq-title': 'Domande Frequenti',
        'faq-subtitle': 'Risposte alle domande più comuni sui nostri servizi',
        'faq-1-question': 'È necessario prenotare?',
        'faq-1-answer': 'Consigliamo sempre di prenotare, specialmente nei weekend e durante le festività. Puoi prenotare telefonicamente, via WhatsApp o attraverso il nostro form online.',
        'faq-2-question': 'Avete opzioni vegetariane e vegane?',
        'faq-2-answer': 'Sì, offriamo diverse opzioni vegetariane come la Quinoa Chaufa e il Rocoto Relleno. Per le opzioni vegane, il nostro staff sarà felice di adattare alcuni piatti alle vostre esigenze.',
        'faq-3-question': 'Accettate carte di credito?',
        'faq-3-answer': 'Sì, accettiamo tutte le principali carte di credito (Visa, Mastercard, American Express) oltre ai pagamenti in contanti.',
        'faq-4-question': 'Organizzate eventi privati?',
        'faq-4-answer': 'Sì, organizziamo eventi privati e cene di gruppo. Contattaci per discutere le tue esigenze e creare un menu personalizzato per la tua occasione speciale.',
        'contact-cta-title': 'Pronto per un\'Esperienza Culinaria Unica?',
        'contact-cta-text': 'Non vediamo l\'ora di accoglierti da Mikuna e farti scoprire i veri sapori del Perù. Prenota il tuo tavolo ora o contattaci per qualsiasi informazione.',
        'contact-cta-booking-btn': 'Prenota Ora',
        'contact-cta-call-btn': 'Chiamaci',
        
        // Booking Page
        'booking-hero-title': 'Prenota il Tuo Tavolo',
        'booking-hero-subtitle': 'Riservare è semplice e veloce. Ti aspettiamo per un\'esperienza culinaria indimenticabile',
        'booking-form-title': 'Compila i Tuoi Dati',
        'booking-form-subtitle': 'Inserisci le informazioni per la prenotazione. Ti contatteremo su WhatsApp per confermare',
        'booking-first-name': 'Nome *',
        'booking-last-name': 'Cognome *',
        'booking-phone': 'Telefono *',
        'booking-email': 'Email',
        'booking-date': 'Data *',
        'booking-time': 'Orario *',
        'booking-select-time': 'Seleziona orario',
        'booking-guests': 'Numero di Persone *',
        'booking-select-guests': 'Seleziona numero persone',
        'booking-occasion': 'Occasione',
        'booking-select-occasion': 'Seleziona occasione',
        'booking-normal-dinner': 'Cena normale',
        'booking-birthday': 'Compleanno',
        'booking-anniversary': 'Anniversario',
        'booking-romantic': 'Cena romantica',
        'booking-business': 'Cena di lavoro',
        'booking-special': 'Evento speciale',
        'booking-requests': 'Richieste Particolari',
        'booking-requests-placeholder': 'Allergie, intolleranze, preferenze per il tavolo, ecc...',
        'booking-email-placeholder': 'nome@esempio.it',
        'booking-submit-btn': 'Invia Prenotazione su WhatsApp',
        'booking-info-hours-title': 'Orari di Apertura',
        'booking-hours-sunday': 'Domenica',
        'booking-hours-open-days': 'Lunedì, Mercoledì - Sabato',
        'booking-hours-tuesday': 'Martedì',
        'booking-hours-closed': 'Chiuso',
        'contact-hours-sunday': 'Domenica',
        'contact-hours-open-days': 'Lunedì, Mercoledì - Sabato',
        'contact-hours-tuesday': 'Martedì',
        'contact-hours-closed': 'Chiuso',
        'booking-lunch': 'Pranzo',
        'booking-dinner': 'Cena',
        'booking-info-policy-title': 'Consigli per la Prenotazione',
        'booking-policy-list': '<li>Le prenotazioni sono confermate via WhatsApp</li><li>Consigliamo di prenotare con almeno 24h di anticipo</li><li>Per gruppi superiori a 8 persone, contattaci direttamente</li><li>È possibile modificare o cancellare fino a 2 ore prima</li>',
        'booking-info-menu-title': 'Menu Degustazione',
        'booking-menu-description': 'Chiedi del nostro menu degustazione per un viaggio completo attraverso i sapori del Perù. Perfetto per occasioni speciali.',
        'booking-view-menu': 'Visualizza Menu',
        'booking-info-contact-title': 'Contatti Diretti',
        'booking-whatsapp-direct': 'WhatsApp Diretto',
        'booking-cta-title': 'Non Vedi l\'Ora di Assaggiare?',
        'booking-cta-text': 'Scopri tutti i nostri piatti autentici nel menu o contattaci direttamente per informazioni su eventi speciali e menu degustazione.',
        'booking-cta-menu-btn': 'Esplora il Menu',
        'booking-cta-contact-btn': 'Contattaci',
        
        // FAQ Section
        'faq-title': 'Domande Frequenti',
        'faq-subtitle': 'Tutto quello che vuoi sapere sulla cucina peruviana e su Mikuna',
        'faq-1-q': 'Che cos\'è il ceviche?',
        'faq-1-a': 'Il ceviche è il piatto nazionale del Perù: pesce fresco marinato nel succo di lime che "cuoce" il pesce senza calore. Da Mikuna lo prepariamo secondo la ricetta tradizionale limeña con cipolla rossa, ají e coriandolo.',
        'faq-2-q': 'Dove si trova Mikuna?',
        'faq-2-a': 'Mikuna si trova in Via Giulio Bizzozero 18, 21100, Varese, vicino al centro città e a soli 15 km dal Lago Maggiore. Facilmente raggiungibile dalla stazione ferroviaria di Varese.',
        'faq-3-q': 'Quali sono gli orari di apertura?',
        'faq-3-a': 'Siamo aperti lunedì e da mercoledì a sabato dalle 12:00 alle 15:00 e dalle 19:00 alle 22:00. La domenica dalle 12:00 alle 15:00 e dalle 19:00 alle 22:00. Martedì è il nostro giorno di riposo settimanale.',
        'faq-4-q': 'I piatti peruviani sono piccanti?',
        'faq-4-a': 'La cucina peruviana usa gli ají (peperoncini andini) per il sapore, non solo per il piccante. Abbiamo piatti per tutti i gusti: dal delicato ceviche ai piccanti anticuchos. Possiamo sempre adattare il livello di piccantezza!',
        'faq-5-q': 'Avete opzioni vegetariane?',
        'faq-5-a': 'Assolutamente! Offriamo piatti vegetariani e vegani come la Quinoa Andina, Causa Vegetariana e diverse preparazioni con verdure tipiche peruviane. Molti nostri piatti possono essere adattati alle esigenze alimentari.',
        'faq-6-q': 'Come posso prenotare?',
        'faq-6-a': 'Puoi prenotare facilmente tramite il nostro sito web che ti aprirà una chat WhatsApp precompilata, oppure chiamandoci direttamente al +39 375 835 4504. Consigliamo di prenotare con almeno 24 ore di anticipo.',
        'faq-7-q': 'Servite il Pisco?',
        'faq-7-a': 'Certo! Serviamo autentico Pisco peruviano e prepariamo il tradizionale Pisco Sour, cocktail nazionale del Perù. Abbiamo anche Chicha Morada, bevanda analcolica tipica a base di mais viola.',
        'faq-8-q': 'I vostri ingredienti sono autentici?',
        'faq-8-a': 'Importiamo direttamente dal Perù gli ingredienti essenziali come ají amarillo, ají panca, quinoa, chicha morada e altri prodotti andini. Per il pesce usiamo solo prodotto freschissimo dai migliori fornitori italiani.',
        'family-quote': 'Da molti anni la nostra famiglia porta avanti la tradizione culinaria peruviana con amore, passione e rispetto per le ricette che ci sono state tramandate. Ogni piatto è preparato come se fosse per la nostra stessa famiglia.',
        // ITALIANO
        'wine-section-title': 'Calici & Vini',
        'wine-white-title': 'Vini Bianchi',
        'wine-red-title': 'Vini Rossi',
        'wine-1-name': 'Frizzantino Chardonnay',
        'wine-1-desc': 'Aroma di bouquet, acidulo ed estremamente versatile negli abbinamenti cibo-vino.',
        'wine-1-glass': 'Calice: €5',
        'wine-1-bottle': 'Bottiglia: €15',
        'wine-2-name': 'Callia Torrontes',
        'wine-2-desc': 'Il Torrontes è un vitigno tipico del nord Argentina. Questa varietà presenta un ricco bouquet aromatico, con note floreali e fruttate, come litchi, pesca e pompelmo. Il vino ha un tono fresco, equilibrato e una buona acidità.',
        'wine-2-glass': 'Calice: €6',
        'wine-2-bottle': 'Bottiglia: €19',
        'wine-3-name': 'Intipalka Reserva Cabernet Sauvignon – Petit Verdot',
        'wine-3-desc': 'Aroma di frutti rossi maturi e terra, delicato ma complesso al palato con un retrogusto persistente e speziato.',
        'wine-3-glass': 'Calice: €7',
        'wine-3-bottle': 'Bottiglia: €29',
        'wine-4-name': 'Intipalka Syrah',
        'wine-4-desc': 'Vivace colore rosa salmone. Al naso evidenzia sentori di fiori di biancospino, mela, mandorla e ciliegia selvatica. In bocca è gustoso, fresco e sapido.',
        'wine-4-glass': 'Calice: €6',
        'wine-4-bottle': 'Bottiglia: €24',
        'wine-disclaimer': 'Altri vini tipici della tradizione peruviana disponibili: chiedi alla casa per scoprire la selezione completa!',
    },
    
    es: {
        // Navigation
        'nav-subtitle': 'Restaurante Peruano',
        'nav-home': 'Inicio',
        'nav-about': 'Quiénes Somos',
        'nav-menu': 'Menú',

        'nav-contact': 'Contacto',
        'nav-booking': 'Reservar',
        
        // Hero Section
        'hero-title': 'Bienvenidos a Mikuna',
        'hero-subtitle': 'Auténtica cocina peruana en el corazón de Varese, Lombardía',
        'hero-description': 'Descubre los sabores tradicionales del Perú en el centro de Varese, cerca del Lago Mayor. Ceviche, Lomo Saltado y especialidades andinas con ingredientes frescos de las tierras incas, ahora en los lagos lombardos.',
        'hero-menu-btn': 'Descubre el Menú',
        'hero-booking-btn': 'Reserva Ahora',

        
        // Specialties
        'specialties-title': 'Nuestras Especialidades',
        'specialties-subtitle': 'Platos auténticos preparados con pasión e ingredientes de calidad',
        'dish-1-name': 'Ceviche Mixto',
        'dish-1-desc': 'Pescado fresco marinado en limón con cebolla roja y ají',
        'dish-2-name': 'Lomo Saltado',
        'dish-2-desc': 'Carne salteada con cebolla, tomate y papas fritas',
        'dish-3-name': 'Ají de Gallina',
        'dish-3-desc': 'Pollo en salsa cremosa de ají amarillo con nueces',
        'dish-4-name': 'Anticuchos',
        'dish-4-desc': 'Brochetas de carne marinadas en salsa de ají panca',
        'dish-5-name': 'Pisco Sour',
        'dish-5-desc': 'El cóctel nacional del Perú con pisco, limón y clara de huevo',
        
        // About Preview
        'about-preview-title': 'Nuestra Historia',
        'about-preview-text1': 'Mikuna nace de la pasión por la auténtica cocina peruana y el deseo de compartir los sabores tradicionales del Perú en el corazón de Varese.',
        'about-preview-text2': 'Cada plato cuenta una historia, cada ingrediente es elegido con cuidado para ofrecer una experiencia culinaria inolvidable.',
        'about-preview-btn': 'Descubre más',
        
        // Info Section
        'info-location-title': 'Dónde Estamos',
        'info-location-text': 'Via Giulio Bizzozero 18, 21100, Varese',
        'info-hours-title': 'Horarios de Apertura',
        'info-hours-text': 'Dom: 12-15, 19-22<br>Lun, Mié-Sáb: 12-15, 19-22<br>Martes: Cerrado',
        'info-contact-title': 'Contacto',
        
        // Footer
        'footer-description': 'Auténtica cocina peruana en el corazón de Varese. Ven a descubrir los sabores del Perú en un ambiente acogedor y familiar.',
        'footer-links-title': 'Enlaces Útiles',
        'footer-contact-title': 'Contacto',
        'footer-rights': 'Todos los derechos reservados.',
        
        // About Page
        'about-hero-title': 'Nuestra Historia',
        'about-hero-subtitle': 'Un viaje culinario del Perú a Varese',
        'story-title': 'De Lima a Varese',
        'story-text1': 'Mikuna nace del sueño de compartir la auténtica cocina peruana con la comunidad de Varese. Nuestro nombre, que en quechua significa "comida", representa la esencia de nuestra misión: llevar los verdaderos sabores del Perú a las mesas italianas.',
        'story-text2': 'Nuestra aventura comienza en las calles de Lima, donde cada plato cuenta una historia milenaria de tradiciones culinarias que se transmiten de generación en generación. En 2023, decidimos abrir las puertas de nuestro restaurante en el corazón de Varese, en Via Giulio Bizzozero 18, 21100, Varese.',
        'story-text3': 'Cada ingrediente es seleccionado con cuidado, cada receta es preparada siguiendo las antiguas tradiciones peruanas. Nuestro objetivo es ofrecer una experiencia culinaria auténtica que transporte a nuestros huéspedes en un viaje a través de los sabores del Perú.',
        'story-image-caption': 'Las raíces de nuestra cocina se hunden en las tierras del Perú',
        'mission-title': 'Nuestra Misión',
        'mission-subtitle': 'Llevar la auténtica experiencia culinaria peruana al corazón de Varese',
        'mission-1-title': 'Autenticidad',
        'mission-1-desc': 'Cada plato es preparado siguiendo las recetas tradicionales peruanas, utilizando ingredientes auténticos importados directamente del Perú.',
        'mission-2-title': 'Calidad',
        'mission-2-desc': 'Seleccionamos solo los mejores ingredientes frescos, respetando la estacionalidad y privilegiando proveedores locales cuando es posible.',
        'mission-3-title': 'Hospitalidad',
        'mission-3-desc': 'Acogemos a cada huésped como parte de nuestra familia, creando una atmósfera cálida y familiar típica de la cultura peruana.',
        'team-title': 'Nuestro Equipo',
        'team-subtitle': 'Las personas que hacen posible la experiencia Mikuna',
        'chef-name': 'Chef Carlos Mendoza',
        'chef-role': 'Chef Ejecutivo',
        'chef-bio': 'Nacido en Lima, Carlos ha traído a Mikuna más de 15 años de experiencia en la cocina peruana tradicional. Su pasión por los sabores auténticos es el corazón de nuestra propuesta culinaria.',
        'manager-name': 'Maria Gonzalez',
        'manager-role': 'Gerente del Restaurante',
        'manager-bio': 'Con su experiencia en hospitalidad y su pasión por la cultura peruana, Maria se asegura de que cada huésped viva una experiencia inolvidable en Mikuna.',
        'values-title': 'Nuestros Valores',
        'value-1-title': 'Tradición',
        'value-1-desc': 'Respetamos y preservamos las recetas tradicionales peruanas',
        'value-2-title': 'Sostenibilidad',
        'value-2-desc': 'Apoyamos prácticas sostenibles y el comercio justo',
        'value-3-title': 'Comunidad',
        'value-3-desc': 'Somos parte de la comunidad de Varese y la servimos con orgullo',
        'cta-title': 'Ven a Descubrir Nuestra Historia',
        'cta-text': 'Te esperamos en Mikuna para compartir contigo la pasión por la cocina peruana y hacerte vivir una experiencia culinaria auténtica en el corazón de Varese.',
        'cta-menu-btn': 'Descubre el Menú',
        'cta-booking-btn': 'Reserva una Mesa',
        
        // Menu Page
        'menu-hero-title': 'Nuestro Menú',
        'menu-hero-subtitle': 'Auténtica cocina peruana en el corazón de Varese',
        'menu-nav-appetizers': 'Aperitivos',
        'menu-nav-fish': 'Pescado',
        'menu-nav-meat': 'Carne',
        'menu-nav-vegetarian': 'Vegetarianos',
        'menu-nav-drinks': 'Bebidas',
        'menu-nav-desserts': 'Postres',
        'menu-appetizers-title': 'Aperitivos',
        'menu-appetizers-subtitle': 'Inicia tu viaje culinario con nuestros aperitivos tradicionales',
        'appetizer-1-name': 'Anticuchos de Corazón',
        'appetizer-1-desc': 'Brochetas de corazón de res marinadas en salsa de ají panca, servidas con salsa huacatay y choclo',
        'appetizer-2-name': 'Causa Limeña',
        'appetizer-2-desc': 'Capas de puré de papas amarillas condimentadas con limón y ají, rellenas con atún, mayonesa y palta',
        'appetizer-3-name': 'Papa Rellena',
        'appetizer-3-desc': 'Croquetas de papa rellenas de carne molida especiada, servidas con salsa criolla',
        'menu-fish-title': 'Especialidades de Pescado',
        'menu-fish-subtitle': 'Los tesoros del mar peruano preparados con maestría',
        'fish-1-name': 'Ceviche Mixto',
        'fish-1-desc': 'Pescado blanco y mariscos marinados en limón, con cebolla roja, apio, ají y cilantro',
        'fish-2-name': 'Tiradito de Pescado',
        'fish-2-desc': 'Finas láminas de pescado crudo aderezadas con salsa de ají amarillo, limón y aceite de oliva',
        'fish-3-name': 'Pescado a lo Macho',
        'fish-3-desc': 'Filete de pescado a la plancha con salsa picante de mariscos, servido con arroz blanco',
        'menu-meat-title': 'Especialidades de Carne',
        'menu-meat-subtitle': 'Platos contundentes que celebran las tradiciones andinas',
        'meat-1-name': 'Lomo Saltado',
        'meat-1-desc': 'Tiras de carne salteadas con cebolla, tomates y papas fritas, servidas con arroz blanco',
        'meat-2-name': 'Ají de Gallina',
        'meat-2-desc': 'Pollo deshilachado en cremosa salsa de ají amarillo con nueces, servido con arroz y papas sancochadas',
        'meat-3-name': 'Cabrito Norteño',
        'meat-3-desc': 'Cabrito guisado con cilantro y chicha de jora, servido con frijoles canarios y arroz',
        'menu-vegetarian-title': 'Platos Vegetarianos',
        'menu-vegetarian-subtitle': 'Sabores vegetales de la tradición peruana',
        'vegetarian-1-name': 'Quinoa Chaufa',
        'vegetarian-1-desc': 'Quinoa salteada con verduras mixtas, salsa de soja y huevos, estilo chifa peruano',
        'vegetarian-2-name': 'Rocoto Relleno',
        'vegetarian-2-desc': 'Rocotos rellenos de quinoa, verduras y queso, gratinados al horno',
        'menu-drinks-title': 'Bebidas',
        'menu-drinks-subtitle': 'Cócteles tradicionales y bebidas sin alcohol del Perú',
        'drink-1-name': 'Pisco Sour',
        'drink-1-desc': 'El cóctel nacional del Perú: pisco, jugo de limón, jarabe, clara de huevo y angostura',
        'drink-2-name': 'Chicha Morada',
        'drink-2-desc': 'Bebida tradicional a base de maíz morado, canela, clavo de olor y frutas',
        'drink-3-name': 'Inca Kola',
        'drink-3-desc': 'La bebida gaseosa dorada del Perú, de sabor único e inconfundible',
        'menu-desserts-title': 'Postres',
        'menu-desserts-subtitle': 'Dulces tradicionales para terminar con dulzura',
        'dessert-1-name': 'Suspiro de Limeña',
        'dessert-1-desc': 'Dulce tradicional de Lima con manjar blanco y merengue al oporto',
        'dessert-2-name': 'Picarones',
        'dessert-2-desc': 'Rosquillas de zapallo y camote fritas, servidas con miel de chancaca',
        'menu-cta-title': '¿Listo para Degustar los Sabores del Perú?',
        'menu-cta-text': 'Reserva tu mesa en Mikuna y déjate transportar en un viaje culinario a través de los sabores auténticos de la tradición peruana.',
        'menu-cta-booking-btn': 'Reserva Ahora',
        'menu-cta-contact-btn': 'Contáctanos',
        'tag-spicy': 'Picante',
        'tag-cold': 'Frío',
        'tag-fried': 'Frito',
        'tag-signature': 'Especialidad',
        'tag-fresh': 'Fresco',
        'tag-raw': 'Crudo',
        'tag-grilled': 'A la Plancha',
        'tag-mild': 'Suave',
        'tag-traditional': 'Tradicional',
        'tag-vegetarian': 'Vegetariano',
        'tag-protein': 'Proteico',
        'tag-baked': 'Al Horno',
        'tag-cocktail': 'Cóctel',
        'tag-non-alcoholic': 'Sin Alcohol',
        'tag-sweet': 'Dulce',
        'tag-sauteed': 'Salteado',
        
        // Contact Page
        'contact-hero-title': 'Contacto',
        'contact-hero-subtitle': 'Estamos aquí para recibirte y hacerte vivir una experiencia inolvidable',
        'contact-address-title': 'Dirección',
        'contact-directions': 'Obtener direcciones',
        'contact-phone-title': 'Teléfono',
        'contact-whatsapp': 'Escríbenos por WhatsApp',
        'contact-email-title': 'Email',
        'contact-email-note': 'Te responderemos dentro de 24 horas',
        'contact-hours-title': 'Horarios de Apertura',
        'contact-hours-tue-sun': 'Martes - Domingo',
        'contact-hours-monday': 'Lunes',
        'contact-hours-closed': 'Cerrado',
        'contact-hours-note': 'Siempre recomendamos reservar',
        'contact-map-title': 'Cómo Llegar',
        'contact-map-subtitle': 'Estamos ubicados en el centro de Varese, fácilmente accesibles',
        'contact-open-maps': 'Abrir en Google Maps',
        'transport-title': 'Cómo Llegar',
        'transport-subtitle': 'Información útil para llegar con diferentes medios de transporte',
        'transport-car-title': 'En Coche',
        'transport-car-info': '<li>Aparcamiento disponible en las cercanías</li><li>A 5 minutos del centro de Varese</li><li>Fácilmente accesible desde la autopista A8</li>',
        'transport-train-title': 'En Tren',
        'transport-train-info': '<li>Estación Varese: 10 minutos a pie</li><li>Conexiones directas desde Milán</li><li>Línea regional de Lombardía</li>',
        'transport-bus-title': 'En Autobús',
        'transport-bus-info': '<li>Parada "Bizzozzero": 2 minutos a pie</li><li>Líneas urbanas 1, 4 y 7</li><li>Conexión con la estación de tren</li>',
        'transport-walk-title': 'A Pie',
        'transport-walk-info': '<li>5 minutos del centro histórico</li><li>Ruta peatonal segura</li><li>Zona bien iluminada</li>',
        'social-title': 'Síguenos en Redes Sociales',
        'social-subtitle': 'Mantente actualizado sobre eventos, novedades del menú y ofertas especiales',
        'social-facebook': 'Fotos de platos y actualizaciones',
        'social-instagram': 'Stories y contenido exclusivo',
        'social-tripadvisor': 'Reseñas y valoraciones',
        'online-services-title': 'Pide y Reserva Online',
        'online-services-subtitle': 'Descubre nuestros socios para pedir a casa o reservar tu mesa',
        'service-deliveroo': 'Pide nuestros platos a casa',
        'service-thefork': 'Reserva tu mesa fácilmente',
        'service-delivery-tag': 'Entrega a domicilio',
        'service-booking-tag': 'Reserva online',
        'faq-search-placeholder': 'Buscar una pregunta...',
        'faq-title': 'Preguntas Frecuentes',
        'faq-subtitle': 'Respuestas a las preguntas más comunes sobre nuestros servicios',
        'faq-1-question': '¿Es necesario reservar?',
        'faq-1-answer': 'Siempre recomendamos reservar, especialmente los fines de semana y durante las festividades. Puedes reservar por teléfono, vía WhatsApp o a través de nuestro formulario online.',
        'faq-2-question': '¿Tienen opciones vegetarianas y veganas?',
        'faq-2-answer': 'Sí, ofrecemos varias opciones vegetarianas como la Quinoa Chaufa y el Rocoto Relleno. Para opciones veganas, nuestro personal estará encantado de adaptar algunos platos a sus necesidades.',
        'faq-3-question': '¿Aceptan tarjetas de crédito?',
        'faq-3-answer': 'Sí, aceptamos todas las principales tarjetas de crédito (Visa, Mastercard, American Express) además de pagos en efectivo.',
        'faq-4-question': '¿Organizan eventos privados?',
        'faq-4-answer': 'Sí, organizamos eventos privados y cenas de grupo. Contáctanos para discutir tus necesidades y crear un menú personalizado para tu ocasión especial.',
        'contact-cta-title': '¿Listo para una Experiencia Culinaria Única?',
        'contact-cta-text': 'No vemos la hora de recibirte en Mikuna y hacerte descubrir los verdaderos sabores del Perú. Reserva tu mesa ahora o contáctanos para cualquier información.',
        'contact-cta-booking-btn': 'Reserva Ahora',
        'contact-cta-call-btn': 'Llámanos',
        
        // Booking Page
        'booking-hero-title': 'Reserva Tu Mesa',
        'booking-hero-subtitle': 'Reservar es simple y rápido. Te esperamos para una experiencia culinaria inolvidable',
        'booking-form-title': 'Completa Tus Datos',
        'booking-form-subtitle': 'Ingresa la información para la reserva. Te contactaremos por WhatsApp para confirmar',
        'booking-first-name': 'Nombre *',
        'booking-last-name': 'Apellido *',
        'booking-phone': 'Teléfono *',
        'booking-email': 'Email',
        'booking-date': 'Fecha *',
        'booking-time': 'Horario *',
        'booking-select-time': 'Selecciona horario',
        'booking-guests': 'Número de Personas *',
        'booking-select-guests': 'Selecciona número de personas',
        'booking-occasion': 'Ocasión',
        'booking-select-occasion': 'Selecciona ocasión',
        'booking-normal-dinner': 'Cena normal',
        'booking-birthday': 'Cumpleaños',
        'booking-anniversary': 'Aniversario',
        'booking-romantic': 'Cena romántica',
        'booking-business': 'Cena de negocios',
        'booking-special': 'Evento especial',
        'booking-requests': 'Solicitudes Especiales',
        'booking-requests-placeholder': 'Alergias, intolerancias, preferencias de mesa, etc...',
        'booking-email-placeholder': 'nombre@ejemplo.es',
        'booking-submit-btn': 'Enviar Reserva por WhatsApp',
        'booking-info-hours-title': 'Horarios de Apertura',
        'booking-hours-sunday': 'Domingo',
        'booking-hours-open-days': 'Lunes, Miércoles - Sábado',
        'booking-hours-tuesday': 'Martes',
        'booking-hours-closed': 'Cerrado',
        'contact-hours-sunday': 'Domingo',
        'contact-hours-open-days': 'Lunes, Miércoles - Sábado',
        'contact-hours-tuesday': 'Martes',
        'contact-hours-closed': 'Cerrado',
        'booking-lunch': 'Almuerzo',
        'booking-dinner': 'Cena',
        'booking-info-policy-title': 'Política de Reservas',
        'booking-policy-list': '<li>Las reservas se confirman vía WhatsApp</li><li>Recomendamos reservar con al menos 24h de anticipación</li><li>Para grupos superiores a 8 personas, contáctanos directamente</li><li>Es posible modificar o cancelar hasta 2 horas antes</li>',
        'booking-info-menu-title': 'Menú Degustación',
        'booking-menu-description': 'Pregunta por nuestro menú degustación para un viaje completo a través de los sabores del Perú. Perfecto para ocasiones especiales.',
        'booking-view-menu': 'Ver Menú',
        'booking-info-contact-title': 'Contactos Directos',
        'booking-whatsapp-direct': 'WhatsApp Directo',
        'booking-cta-title': '¿No Puedes Esperar a Probar?',
        'booking-cta-text': 'Descubre todos nuestros platos auténticos en el menú o contáctanos directamente para información sobre eventos especiales y menús degustación.',
        'booking-cta-menu-btn': 'Explorar el Menú',
        'booking-cta-contact-btn': 'Contáctanos',
        
        // FAQ Section
        'faq-title': 'Preguntas Frecuentes',
        'faq-subtitle': 'Todo lo que quieres saber sobre la cocina peruana y Mikuna',
        'faq-1-q': '¿Qué es el ceviche?',
        'faq-1-a': 'El ceviche es el plato nacional del Perú: pescado fresco marinado en jugo de limón que "cocina" el pescado sin calor. En Mikuna lo preparamos según la receta tradicional limeña con cebolla roja, ají y cilantro.',
        'faq-2-q': '¿Dónde está ubicado Mikuna?',
        'faq-2-a': 'Mikuna está ubicado en Via Giulio Bizzozero 18, 21100, Varese, cerca del centro de la ciudad y a solo 15 km del Lago Maggiore. Fácilmente accesible desde la estación de tren de Varese.',
        'faq-3-q': '¿Cuáles son los horarios de apertura?',
        'faq-3-a': 'Estamos abiertos lunes y de miércoles a sábado de 12:00 a 15:00 y de 19:00 a 22:00. El domingo de 12:00 a 15:00 y de 19:00 a 22:00. El martes es nuestro día de descanso.',
        'faq-4-q': '¿Los platos peruanos son picantes?',
        'faq-4-a': 'La cocina peruana usa los ajíes (chiles andinos) por el sabor, no solo por el picante. Tenemos platos para todos los gustos: desde el delicado ceviche hasta los picantes anticuchos. ¡Siempre podemos adaptar el nivel de picante!',
        'faq-5-q': '¿Tienen opciones vegetarianas?',
        'faq-5-a': '¡Por supuesto! Ofrecemos platos vegetarianos y veganos como la Quinoa Andina, Causa Vegetariana y diversas preparaciones con verduras típicas peruanas. Muchos de nuestros platos pueden adaptarse a necesidades alimentarias.',
        'faq-6-q': '¿Cómo puedo hacer una reserva?',
        'faq-6-a': 'Puedes reservar fácilmente a través de nuestro sitio web que abrirá un chat de WhatsApp precompletado, o llamándonos directamente al +39 375 835 4504. Recomendamos reservar con al menos 24 horas de anticipación.',
        'faq-7-q': '¿Sirven Pisco?',
        'faq-7-a': '¡Por supuesto! Servimos auténtico Pisco peruano y preparamos el tradicional Pisco Sour, cóctel nacional del Perú. También tenemos Chicha Morada, bebida sin alcohol típica a base de maíz morado.',
        'faq-8-q': '¿Sus ingredientes son auténticos?',
        'faq-8-a': 'Importamos directamente del Perú los ingredientes esenciales como ají amarillo, ají panca, quinoa, chicha morada y otros productos andinos. Para el pescado usamos solo producto freschísimo de los mejores proveedores italianos.',
        'family-quote': 'Da molti anni la nostra famiglia porta avanti la tradizione culinaria peruviana con amore, passione e rispetto per le ricette che ci sono state tramandate. Ogni piatto è preparato come se fosse per la nostra stessa famiglia.',
        // ESPAÑOL
        'wine-section-title': 'Copas & Vinos',
        'wine-white-title': 'Vinos Blancos',
        'wine-red-title': 'Vinos Tintos',
        'wine-1-name': 'Frizzantino Chardonnay',
        'wine-1-desc': 'Aroma de bouquet, ácido y extremadamente versátil en maridajes.',
        'wine-1-glass': 'Copa: €5',
        'wine-1-bottle': 'Botella: €15',
        'wine-2-name': 'Callia Torrontes',
        'wine-2-desc': 'El Torrontés es una uva típica del norte de Argentina. Esta variedad presenta un rico bouquet aromático, con notas florales y frutales como lichi, durazno y pomelo. El vino es fresco, equilibrado y con buena acidez.',
        'wine-2-glass': 'Copa: €6',
        'wine-2-bottle': 'Botella: €19',
        'wine-3-name': 'Intipalka Reserva Cabernet Sauvignon – Petit Verdot',
        'wine-3-desc': 'Aroma de frutos rojos maduros y tierra, delicado pero complejo en boca con un retrogusto persistente y especiado.',
        'wine-3-glass': 'Copa: €7',
        'wine-3-bottle': 'Botella: €29',
        'wine-4-name': 'Intipalka Syrah',
        'wine-4-desc': 'Color rosa salmón vivo. En nariz muestra notas de flores de espino, manzana, almendra y cereza silvestre. En boca es sabroso, fresco y salino.',
        'wine-4-glass': 'Copa: €6',
        'wine-4-bottle': 'Botella: €24',
        'wine-disclaimer': 'Otros vinos típicos de la tradición peruana disponibles: ¡pregunta en la casa para descubrir la selección completa!',
    },
    
    en: {
        // Navigation
        'nav-subtitle': 'Peruvian Restaurant',
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-menu': 'Menu',

        'nav-contact': 'Contact',
        'nav-booking': 'Book Table',
        
        // Hero Section
        'hero-title': 'Welcome to Mikuna',
        'hero-subtitle': 'Authentic Peruvian cuisine in the heart of Varese, Lombardy',
        'hero-description': 'Discover traditional Peruvian flavors in central Varese, near Lake Maggiore. Ceviche, Lomo Saltado and Andean specialties with fresh ingredients from the Inca lands, now in the Lombard lakes region.',
        'hero-menu-btn': 'Discover Menu',
        'hero-booking-btn': 'Book Now',

        
        // Specialties
        'specialties-title': 'Our Specialties',
        'specialties-subtitle': 'Authentic dishes prepared with passion and quality ingredients',
        'dish-1-name': 'Ceviche Mixto',
        'dish-1-desc': 'Fresh fish marinated in lime with red onion and chili',
        'dish-2-name': 'Lomo Saltado',
        'dish-2-desc': 'Sautéed beef with onion, tomato and fried potatoes',
        'dish-3-name': 'Ají de Gallina',
        'dish-3-desc': 'Chicken in creamy ají amarillo sauce with walnuts',
        'dish-4-name': 'Anticuchos',
        'dish-4-desc': 'Marinated beef skewers in ají panca sauce',
        'dish-5-name': 'Pisco Sour',
        'dish-5-desc': 'Peru\'s national cocktail with pisco, lime and egg white',
        
        // About Preview
        'about-preview-title': 'Our Story',
        'about-preview-text1': 'Mikuna was born from a passion for authentic Peruvian cuisine and the desire to share the traditional flavors of Peru in the heart of Varese.',
        'about-preview-text2': 'Every dish tells a story, every ingredient is carefully chosen to offer an unforgettable culinary experience.',
        'about-preview-btn': 'Learn more',
        
        // Info Section
        'info-location-title': 'Where We Are',
        'info-location-text': 'Via Giulio Bizzozero 18, 21100, Varese',
        'info-hours-title': 'Opening Hours',
        'info-hours-text': 'Sun: 12-3 PM, 7-10 PM<br>Mon, Wed-Sat: 12-3 PM, 7-10 PM<br>Tuesday: Closed',
        'info-contact-title': 'Contact',
        
        // Footer
        'footer-description': 'Authentic Peruvian cuisine in the heart of Varese. Come and discover the flavors of Peru in a welcoming and familiar environment.',
        'footer-links-title': 'Useful Links',
        'footer-contact-title': 'Contact',
        'footer-rights': 'All rights reserved.',
        
        // About Page
        'about-hero-title': 'Our Story',
        'about-hero-subtitle': 'A culinary journey from Peru to Varese',
        'story-title': 'From Lima to Varese',
        'story-text1': 'Mikuna was born from the dream of sharing authentic Peruvian cuisine with the Varese community. Our name, which means "food" in Quechua, represents the essence of our mission: bringing the true flavors of Peru to Italian tables.',
        'story-text2': 'Our adventure begins in the streets of Lima, where every dish tells a thousand-year-old story of culinary traditions passed down from generation to generation. In 2023, we decided to open the doors of our restaurant in the heart of Varese, on Via Giulio Bizzozero 18, 21100, Varese.',
        'story-text3': 'Every ingredient is carefully selected, every recipe is prepared following ancient Peruvian traditions. Our goal is to offer an authentic culinary experience that transports our guests on a journey through the flavors of Peru.',
        'story-image-caption': 'The roots of our cuisine lie deep in the lands of Peru',
        'mission-title': 'Our Mission',
        'mission-subtitle': 'Bringing authentic Peruvian culinary experience to the heart of Varese',
        'mission-1-title': 'Authenticity',
        'mission-1-desc': 'Every dish is prepared following traditional Peruvian recipes, using authentic ingredients imported directly from Peru.',
        'mission-2-title': 'Quality',
        'mission-2-desc': 'We select only the finest fresh ingredients, respecting seasonality and favoring local suppliers when possible.',
        'mission-3-title': 'Hospitality',
        'mission-3-desc': 'We welcome every guest as part of our family, creating a warm and familiar atmosphere typical of Peruvian culture.',
        'team-title': 'Our Team',
        'team-subtitle': 'The people who make the Mikuna experience possible',
        'chef-name': 'Chef Carlos Mendoza',
        'chef-role': 'Executive Chef',
        'chef-bio': 'Born in Lima, Carlos has brought to Mikuna over 15 years of experience in traditional Peruvian cuisine. His passion for authentic flavors is the heart of our culinary proposal.',
        'manager-name': 'Maria Gonzalez',
        'manager-role': 'Restaurant Manager',
        'manager-bio': 'With her experience in hospitality and her passion for Peruvian culture, Maria ensures that every guest has an unforgettable experience at Mikuna.',
        'values-title': 'Our Values',
        'value-1-title': 'Tradition',
        'value-1-desc': 'We respect and preserve traditional Peruvian recipes',
        'value-2-title': 'Sustainability',
        'value-2-desc': 'We support sustainable practices and fair trade',
        'value-3-title': 'Community',
        'value-3-desc': 'We are part of the Varese community and serve it with pride',
        'cta-title': 'Come Discover Our Story',
        'cta-text': 'We await you at Mikuna to share with you the passion for Peruvian cuisine and give you an authentic culinary experience in the heart of Varese.',
        'cta-menu-btn': 'Discover the Menu',
        'cta-booking-btn': 'Book a Table',
        
        // Menu Page
        'menu-hero-title': 'Our Menu',
        'menu-hero-subtitle': 'Authentic Peruvian cuisine in the heart of Varese',
        'menu-nav-appetizers': 'Appetizers',
        'menu-nav-fish': 'Fish',
        'menu-nav-meat': 'Meat',
        'menu-nav-vegetarian': 'Vegetarian',
        'menu-nav-drinks': 'Drinks',
        'menu-nav-desserts': 'Desserts',
        'menu-appetizers-title': 'Appetizers',
        'menu-appetizers-subtitle': 'Start your culinary journey with our traditional appetizers',
        'appetizer-1-name': 'Anticuchos de Corazón',
        'appetizer-1-desc': 'Beef heart skewers marinated in ají panca sauce, served with huacatay sauce and corn',
        'appetizer-2-name': 'Causa Limeña',
        'appetizer-2-desc': 'Layers of yellow potato puree seasoned with lime and ají, filled with tuna, mayonnaise and avocado',
        'appetizer-3-name': 'Papa Rellena',
        'appetizer-3-desc': 'Potato croquettes stuffed with spiced ground meat, served with criolla sauce',
        'menu-fish-title': 'Fish Specialties',
        'menu-fish-subtitle': 'Treasures of the Peruvian sea prepared with mastery',
        'fish-1-name': 'Ceviche Mixto',
        'fish-1-desc': 'White fish and seafood marinated in lime, with red onion, celery, chili and cilantro',
        'fish-2-name': 'Tiradito de Pescado',
        'fish-2-desc': 'Thin slices of raw fish seasoned with ají amarillo sauce, lime and olive oil',
        'fish-3-name': 'Pescado a lo Macho',
        'fish-3-desc': 'Grilled fish fillet with spicy seafood sauce, served with white rice',
        'menu-meat-title': 'Meat Specialties',
        'menu-meat-subtitle': 'Hearty dishes celebrating Andean traditions',
        'meat-1-name': 'Lomo Saltado',
        'meat-1-desc': 'Beef strips sautéed with onion, tomatoes and fried potatoes, served with white rice',
        'meat-2-name': 'Ají de Gallina',
        'meat-2-desc': 'Shredded chicken in creamy ají amarillo sauce with walnuts, served with rice and boiled potatoes',
        'meat-3-name': 'Cabrito Norteño',
        'meat-3-desc': 'Kid goat stewed with cilantro and chicha de jora, served with canary beans and rice',
        'menu-vegetarian-title': 'Vegetarian Dishes',
        'menu-vegetarian-subtitle': 'Plant flavors from Peruvian tradition',
        'vegetarian-1-name': 'Quinoa Chaufa',
        'vegetarian-1-desc': 'Quinoa sautéed with mixed vegetables, soy sauce and eggs, Peruvian chifa style',
        'vegetarian-2-name': 'Rocoto Relleno',
        'vegetarian-2-desc': 'Rocoto peppers stuffed with quinoa, vegetables and cheese, baked au gratin',
        'menu-drinks-title': 'Drinks',
        'menu-drinks-subtitle': 'Traditional cocktails and non-alcoholic drinks from Peru',
        'drink-1-name': 'Pisco Sour',
        'drink-1-desc': 'Peru\'s national cocktail: pisco, lime juice, syrup, egg white and angostura',
        'drink-2-name': 'Chicha Morada',
        'drink-2-desc': 'Traditional drink made from purple corn, cinnamon, cloves and fruit',
        'drink-3-name': 'Inca Kola',
        'drink-3-desc': 'Peru\'s golden soft drink, with a unique and unmistakable flavor',
        'menu-desserts-title': 'Desserts',
        'menu-desserts-subtitle': 'Traditional sweets to end on a sweet note',
        'dessert-1-name': 'Suspiro de Limeña',
        'dessert-1-desc': 'Traditional Lima sweet with manjar blanco and port wine meringue',
        'dessert-2-name': 'Picarones',
        'dessert-2-desc': 'Fried pumpkin and sweet potato donuts, served with chancaca honey',
        'menu-cta-title': 'Ready to Taste the Flavors of Peru?',
        'menu-cta-text': 'Book your table at Mikuna and let yourself be transported on a culinary journey through the authentic flavors of Peruvian tradition.',
        'menu-cta-booking-btn': 'Book Now',
        'menu-cta-contact-btn': 'Contact Us',
        'tag-spicy': 'Spicy',
        'tag-cold': 'Cold',
        'tag-fried': 'Fried',
        'tag-signature': 'Signature',
        'tag-fresh': 'Fresh',
        'tag-raw': 'Raw',
        'tag-grilled': 'Grilled',
        'tag-mild': 'Mild',
        'tag-traditional': 'Traditional',
        'tag-vegetarian': 'Vegetarian',
        'tag-protein': 'High Protein',
        'tag-baked': 'Baked',
        'tag-cocktail': 'Cocktail',
        'tag-non-alcoholic': 'Non-Alcoholic',
        'tag-sweet': 'Sweet',
        'tag-sauteed': 'Sautéed',
        
        // Contact Page
        'contact-hero-title': 'Contact',
        'contact-hero-subtitle': 'We are here to welcome you and give you an unforgettable experience',
        'contact-address-title': 'Address',
        'contact-directions': 'Get directions',
        'contact-phone-title': 'Phone',
        'contact-whatsapp': 'Write us on WhatsApp',
        'contact-email-title': 'Email',
        'contact-email-note': 'We will reply within 24 hours',
        'contact-hours-title': 'Opening Hours',
        'contact-hours-tue-sun': 'Tuesday - Sunday',
        'contact-hours-monday': 'Monday',
        'contact-hours-closed': 'Closed',
        'contact-hours-note': 'We always recommend booking',
        'contact-map-title': 'How to Reach Us',
        'contact-map-subtitle': 'We are located in the center of Varese, easily accessible',
        'contact-open-maps': 'Open in Google Maps',
        'transport-title': 'How to Get Here',
        'transport-subtitle': 'Useful information to reach us with different means of transport',
        'transport-car-title': 'By Car',
        'transport-car-info': '<li>Parking available nearby</li><li>5 minutes from Varese center</li><li>Easily accessible from A8 highway</li>',
        'transport-train-title': 'By Train',
        'transport-train-info': '<li>Varese Station: 10 minutes walk</li><li>Direct connections from Milan</li><li>Lombardy regional line</li>',
        'transport-bus-title': 'By Bus',
        'transport-bus-info': '<li>"Bizzozzero" stop: 2 minutes walk</li><li>Urban lines 1, 4 and 7</li><li>Connection with train station</li>',
        'transport-walk-title': 'On Foot',
        'transport-walk-info': '<li>5 minutes from historic center</li><li>Safe pedestrian path</li><li>Well-lit area</li>',
        'social-title': 'Follow us on Social Media',
        'social-subtitle': 'Stay updated on events, menu news and special offers',
        'social-facebook': 'Dish photos and updates',
        'social-instagram': 'Stories and exclusive content',
        'social-tripadvisor': 'Reviews and ratings',
        'online-services-title': 'Order and Book Online',
        'online-services-subtitle': 'Discover our partners to order at home or book your table',
        'service-deliveroo': 'Order our dishes at home',
        'service-thefork': 'Book your table easily',
        'service-delivery-tag': 'Home delivery',
        'service-booking-tag': 'Online booking',
        'faq-search-placeholder': 'Search a question...',
        'faq-title': 'Frequently Asked Questions',
        'faq-subtitle': 'Answers to the most common questions about our services',
        'faq-1-question': 'Is it necessary to book?',
        'faq-1-answer': 'We always recommend booking, especially on weekends and during holidays. You can book by phone, via WhatsApp or through our online form.',
        'faq-2-question': 'Do you have vegetarian and vegan options?',
        'faq-2-answer': 'Yes, we offer several vegetarian options like Quinoa Chaufa and Rocoto Relleno. For vegan options, our staff will be happy to adapt some dishes to your needs.',
        'faq-3-question': 'Do you accept credit cards?',
        'faq-3-answer': 'Yes, we accept all major credit cards (Visa, Mastercard, American Express) in addition to cash payments.',
        'faq-4-question': 'Do you organize private events?',
        'faq-4-answer': 'Yes, we organize private events and group dinners. Contact us to discuss your needs and create a personalized menu for your special occasion.',
        'contact-cta-title': 'Ready for a Unique Culinary Experience?',
        'contact-cta-text': 'We can\'t wait to welcome you to Mikuna and let you discover the true flavors of Peru. Book your table now or contact us for any information.',
        'contact-cta-booking-btn': 'Book Now',
        'contact-cta-call-btn': 'Call Us',
        
        // Booking Page
        'booking-hero-title': 'Book Your Table',
        'booking-hero-subtitle': 'Booking is simple and fast. We await you for an unforgettable culinary experience',
        'booking-form-title': 'Fill in Your Details',
        'booking-form-subtitle': 'Enter the information for your reservation. We will contact you on WhatsApp to confirm',
        'booking-first-name': 'First Name *',
        'booking-last-name': 'Last Name *',
        'booking-phone': 'Phone *',
        'booking-email': 'Email',
        'booking-date': 'Date *',
        'booking-time': 'Time *',
        'booking-select-time': 'Select time',
        'booking-guests': 'Number of Guests *',
        'booking-select-guests': 'Select number of guests',
        'booking-occasion': 'Occasion',
        'booking-select-occasion': 'Select occasion',
        'booking-normal-dinner': 'Regular dinner',
        'booking-birthday': 'Birthday',
        'booking-anniversary': 'Anniversary',
        'booking-romantic': 'Romantic dinner',
        'booking-business': 'Business dinner',
        'booking-special': 'Special event',
        'booking-requests': 'Special Requests',
        'booking-requests-placeholder': 'Allergies, intolerances, table preferences, etc...',
        'booking-email-placeholder': 'name@example.com',
        'booking-submit-btn': 'Send Reservation via WhatsApp',
        'booking-info-hours-title': 'Opening Hours',
        'booking-hours-sunday': 'Sunday',
        'booking-hours-open-days': 'Monday, Wednesday - Saturday',
        'booking-hours-tuesday': 'Tuesday',
        'booking-hours-closed': 'Closed',
        'contact-hours-sunday': 'Sunday',
        'contact-hours-open-days': 'Monday, Wednesday - Saturday',
        'contact-hours-tuesday': 'Tuesday',
        'contact-hours-closed': 'Closed',
        'booking-lunch': 'Lunch',
        'booking-dinner': 'Dinner',
        'booking-info-policy-title': 'Booking Policy',
        'booking-policy-list': '<li>Reservations are confirmed via WhatsApp</li><li>We recommend booking at least 24h in advance</li><li>For groups larger than 8 people, contact us directly</li><li>Modifications or cancellations possible up to 2 hours before</li>',
        'booking-info-menu-title': 'Tasting Menu',
        'booking-menu-description': 'Ask about our tasting menu for a complete journey through the flavors of Peru. Perfect for special occasions.',
        'booking-view-menu': 'View Menu',
        'booking-info-contact-title': 'Direct Contacts',
        'booking-whatsapp-direct': 'Direct WhatsApp',
        'booking-cta-title': 'Can\'t Wait to Taste?',
        'booking-cta-text': 'Discover all our authentic dishes in the menu or contact us directly for information about special events and tasting menus.',
        'booking-cta-menu-btn': 'Explore the Menu',
        'booking-cta-contact-btn': 'Contact Us',
        
        // FAQ Section
        'faq-title': 'Frequently Asked Questions',
        'faq-subtitle': 'Everything you want to know about Peruvian cuisine and Mikuna',
        'faq-1-q': 'What is ceviche?',
        'faq-1-a': 'Ceviche is Peru\'s national dish: fresh fish marinated in lime juice that "cooks" the fish without heat. At Mikuna we prepare it according to the traditional Lima recipe with red onion, ají and cilantro.',
        'faq-2-q': 'Where is Mikuna located?',
        'faq-2-a': 'Mikuna is located at Via Giulio Bizzozero 18, 21100, Varese, near the city center and just 15 km from Lake Maggiore. Easily accessible from Varese train station.',
        'faq-3-q': 'What are the opening hours?',
        'faq-3-a': 'We are open Monday and Wednesday to Saturday from 12:00 to 15:00 and from 19:00 to 22:00. On Sunday from 12:00 to 15:00 and from 19:00 to 22:00. Tuesday is our weekly day off.',
        'faq-4-q': 'Are Peruvian dishes spicy?',
        'faq-4-a': 'Peruvian cuisine uses ajíes (Andean chili peppers) for flavor, not just heat. We have dishes for all tastes: from delicate ceviche to spicy anticuchos. We can always adjust the spice level!',
        'faq-5-q': 'Do you have vegetarian options?',
        'faq-5-a': 'Absolutely! We offer vegetarian and vegan dishes like Andean Quinoa, Vegetarian Causa and various preparations with typical Peruvian vegetables. Many of our dishes can be adapted to dietary needs.',
        'faq-6-q': 'How can I make a reservation?',
        'faq-6-a': 'You can easily book through our website which will open a pre-filled WhatsApp chat, or by calling us directly at +39 375 835 4504. We recommend booking at least 24 hours in advance.',
        'faq-7-q': 'Do you serve Pisco?',
        'faq-7-a': 'Of course! We serve authentic Peruvian Pisco and prepare the traditional Pisco Sour, Peru\'s national cocktail. We also have Chicha Morada, a typical non-alcoholic drink made from purple corn.',
        'faq-8-q': 'Are your ingredients authentic?',
        'faq-8-a': 'We import essential ingredients directly from Peru like ají amarillo, ají panca, quinoa, chicha morada and other Andean products. For fish we use only the freshest product from the best Italian suppliers.',
        'family-quote': 'Da molti anni la nostra famiglia porta avanti la tradizione culinaria peruviana con amore, passione e rispetto per le ricette che ci sono state tramandate. Ogni piatto è preparato come se fosse per la nostra stessa famiglia.',
        // ENGLISH
        'wine-section-title': 'Wine by the Glass & Bottles',
        'wine-white-title': 'White Wines',
        'wine-red-title': 'Red Wines',
        'wine-1-name': 'Frizzantino Chardonnay',
        'wine-1-desc': 'Bouquet aroma, tangy and extremely versatile for food pairings.',
        'wine-1-glass': 'Glass: €5',
        'wine-1-bottle': 'Bottle: €15',
        'wine-2-name': 'Callia Torrontes',
        'wine-2-desc': 'Torrontes is a typical grape from northern Argentina. This variety has a rich aromatic bouquet, with floral and fruity notes like lychee, peach and grapefruit. The wine is fresh, balanced and with good acidity.',
        'wine-2-glass': 'Glass: €6',
        'wine-2-bottle': 'Bottle: €19',
        'wine-3-name': 'Intipalka Reserva Cabernet Sauvignon – Petit Verdot',
        'wine-3-desc': 'Aroma of ripe red fruits and earth, delicate yet complex on the palate with a persistent and spicy aftertaste.',
        'wine-3-glass': 'Glass: €7',
        'wine-3-bottle': 'Bottle: €29',
        'wine-4-name': 'Intipalka Syrah',
        'wine-4-desc': 'Lively salmon pink color. On the nose, notes of hawthorn flowers, apple, almond and wild cherry. On the palate it is tasty, fresh and savory.',
        'wine-4-glass': 'Glass: €6',
        'wine-4-bottle': 'Bottle: €24',
        'wine-disclaimer': 'Other typical Peruvian wines available: ask the staff to discover the full selection!',
    }
};

// Classe principale per gestire il sito
class MikunaWebsite {
    constructor() {
        this.currentLanguage = localStorage.getItem('mikuna-language') || 'it';
        this.currentSlide = 0;
        this.slideCount = 0;
        this.autoSlideInterval = null;
        
        this.initializeComponents();
        this.bindEvents();
        this.updateLanguage(this.currentLanguage);
        this.updateCurrentLanguageDisplay(this.currentLanguage);
        this.initCarousel();
        this.initScrollAnimations();
    }
    
    initializeComponents() {
        // Elementi del DOM
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        this.langBtn = document.getElementById('lang-btn');
        this.langDropdown = document.getElementById('lang-dropdown');
        this.currentLangSpan = document.getElementById('current-lang');
        
        // Carousel
        this.carouselTrack = document.getElementById('carousel-track');
        this.carouselPrev = document.getElementById('carousel-prev');
        this.carouselNext = document.getElementById('carousel-next');
        this.carouselDots = document.getElementById('carousel-dots');
        
        if (this.carouselTrack) {
            this.slideCount = this.carouselTrack.children.length;
        }
    }
    
    bindEvents() {
        // Scroll event per navbar
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Hamburger menu
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMobileMenu());
        }
        
        // Language selector
        if (this.langBtn) {
            this.langBtn.addEventListener('click', () => this.toggleLanguageDropdown());
        }
        
        // Carousel controls
        if (this.carouselPrev) {
            this.carouselPrev.addEventListener('click', () => this.previousSlide());
        }
        if (this.carouselNext) {
            this.carouselNext.addEventListener('click', () => this.nextSlide());
        }
        
        // Hero scroll button
        const heroScroll = document.querySelector('.hero-scroll');
        if (heroScroll) {
            heroScroll.addEventListener('click', () => {
                document.querySelector('.specialties').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            });
        }
        
        // Smooth scrolling per i link interni
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        
        // Chiudi menu mobile quando si clicca su un link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });
        
        // Touch/swipe support per carousel
        this.initTouchSupport();
    }
    
    handleScroll() {
        const scrollY = window.scrollY;
        
        // Navbar scroll effect
        if (scrollY > 100) {
            this.navbar?.classList.add('scrolled');
        } else {
            this.navbar?.classList.remove('scrolled');
        }
        
        // Scroll animations
        this.handleScrollAnimations();
    }
    
    toggleMobileMenu() {
        this.hamburger?.classList.toggle('active');
        this.navMenu?.classList.toggle('active');
        document.body.style.overflow = this.navMenu?.classList.contains('active') ? 'hidden' : '';
    }
    
    closeMobileMenu() {
        this.hamburger?.classList.remove('active');
        this.navMenu?.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    toggleLanguageDropdown() {
        this.langDropdown?.classList.toggle('active');
    }
    
    // Sistema di traduzione
    changeLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('mikuna-language', lang);
        this.updateLanguage(lang);
        this.updateCurrentLanguageDisplay(lang);
        this.langDropdown?.classList.remove('active');
    }
    
    updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                // Special handling for form elements with placeholder
                if ((element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && element.hasAttribute('placeholder')) {
                    element.placeholder = translations[lang][key];
                } 
                // Special handling for optgroup labels
                else if (element.tagName === 'OPTGROUP') {
                    element.label = translations[lang][key];
                } 
                else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        
        // Aggiorna l'attributo lang del documento
        document.documentElement.lang = lang;
    }
    
    updateCurrentLanguageDisplay(lang) {
        const langMap = { it: 'IT', es: 'ES', en: 'EN' };
        const flagMap = { it: '🇮🇹', es: '🇵🇪', en: '🇬🇧' };
        
        if (this.currentLangSpan) {
            this.currentLangSpan.textContent = langMap[lang] || 'IT';
        }
        
        const currentFlagSpan = document.getElementById('current-flag');
        if (currentFlagSpan) {
            currentFlagSpan.textContent = flagMap[lang] || '🇮🇹';
        }
    }
    
    // Carousel
    initCarousel() {
        if (!this.carouselTrack || this.slideCount === 0) return;
        
        this.createCarouselDots();
        this.updateCarousel();
        this.startAutoSlide();
        
        // Pausa auto-slide al hover
        const carousel = document.querySelector('.dishes-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.stopAutoSlide());
            carousel.addEventListener('mouseleave', () => this.startAutoSlide());
        }
    }
    
    createCarouselDots() {
        if (!this.carouselDots) return;
        
        this.carouselDots.innerHTML = '';
        for (let i = 0; i < this.slideCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            this.carouselDots.appendChild(dot);
        }
    }
    
    updateCarousel() {
        if (!this.carouselTrack || !this.carouselTrack.children[this.currentSlide]) return;
    
        const currentCard = this.carouselTrack.children[this.currentSlide];
        let offset;
    
        // Per i dispositivi mobili (larghezza <= 640px), calcoliamo l'offset esatto 
        // per centrare la card attiva. Questo risolve il problema dell'accumulo del gap.
        if (window.innerWidth <= 640) {
            const cardWidth = currentCard.offsetWidth;
            const cardLeft = currentCard.offsetLeft;
            // Usiamo il parentElement del track per avere la larghezza del contenitore visibile
            const containerWidth = this.carouselTrack.parentElement.offsetWidth;
            const containerCenter = containerWidth / 2;
            const cardCenter = cardLeft + cardWidth / 2;
            
            offset = containerCenter - cardCenter;
        } else {
            // Manteniamo la logica originale per la visualizzazione desktop
            const slideWidth = this.carouselTrack.children[0]?.offsetWidth || 350;
            const gap = 32; // 2rem in px
            offset = -(this.currentSlide * (slideWidth + gap));
        }
    
        this.carouselTrack.style.transform = `translateX(${offset}px)`;
        
        // Aggiorna i dots di navigazione per indicare la slide attiva
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slideCount;
        this.updateCarousel();
    }
    
    previousSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
        this.updateCarousel();
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.updateCarousel();
    }
    
    startAutoSlide() {
        this.stopAutoSlide();
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
    
    // Touch support per carousel
    initTouchSupport() {
        if (!this.carouselTrack) return;
    
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        let startTransform = 0;
    
        const getTranslateX = () => {
            const style = getComputedStyle(this.carouselTrack);
            // Usiamo DOMMatrix per un parsing robusto della trasformazione
            const matrix = new DOMMatrix(style.transform);
            return matrix.m41;
        };
    
        const handleStart = (e) => {
            isDragging = true;
            startX = e.touches ? e.touches[0].clientX : e.clientX;
            startY = e.touches ? e.touches[0].clientY : e.clientY;
            currentX = startX; // Inizializza currentX per evitare salti
            currentY = startY; // Inizializza currentY per evitare salti
            startTransform = getTranslateX();
            this.carouselTrack.style.transition = 'none'; // Disabilita transizioni durante il drag
            this.stopAutoSlide();
        };
    
        const handleMove = (e) => {
            if (!isDragging) return;
            
            currentX = e.touches ? e.touches[0].clientX : e.clientX;
            const deltaX = currentX - startX;
            
            // Controlla se il movimento è principalmente orizzontale
            if (e.touches) {
                currentY = e.touches[0].clientY;
                const deltaY = Math.abs(currentY - startY);
                const deltaXAbs = Math.abs(deltaX);
                
                // Se il movimento è più orizzontale che verticale, previeni lo scroll
                if (deltaXAbs > deltaY) {
                    e.preventDefault();
                }
            } else {
                e.preventDefault();
            }
            
            this.carouselTrack.style.transform = `translateX(${startTransform + deltaX}px)`;
        };
    
        const handleEnd = () => {
            if (!isDragging) return;
            isDragging = false;
            this.carouselTrack.style.transition = ''; // Riabilita le transizioni per l'animazione di snap
    
            const deltaX = currentX - startX;
            const threshold = 50; // Soglia in pixel per considerare il gesto uno "swipe"
    
            // Se lo swipe è abbastanza lungo, cambia slide nella direzione dello swipe
            if (Math.abs(deltaX) > threshold) {
                if (deltaX > 0) { // Swipe verso destra
                    this.previousSlide();
                } else { // Swipe verso sinistra
                    this.nextSlide();
                }
            } else {
                // Se il drag è breve, esegui lo "snap" alla card più vicina al centro
                const containerCenter = this.carouselTrack.parentElement.offsetWidth / 2;
                const currentTransform = getTranslateX();
                let nearestIndex = this.currentSlide;
                let minDistance = Infinity;
    
                for (let i = 0; i < this.slideCount; i++) {
                    const card = this.carouselTrack.children[i];
                    const cardCenterOnScreen = currentTransform + card.offsetLeft + card.offsetWidth / 2;
                    const distance = Math.abs(containerCenter - cardCenterOnScreen);
    
                    if (distance < minDistance) {
                        minDistance = distance;
                        nearestIndex = i;
                    }
                }
                this.currentSlide = nearestIndex;
                this.updateCarousel(); // Forza l'aggiornamento per eseguire lo snap
            }
            
            this.startAutoSlide(); // Riavvia lo scorrimento automatico
        };
    
        // Associazione degli eventi al mouse
        this.carouselTrack.addEventListener('mousedown', handleStart);
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleEnd);
    
        // Associazione degli eventi al tocco
        this.carouselTrack.addEventListener('touchstart', handleStart, { passive: false });
        this.carouselTrack.addEventListener('touchmove', handleMove, { passive: false });
        this.carouselTrack.addEventListener('touchend', handleEnd);
    }
    
    // Scroll animations
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Osserva tutti gli elementi che devono animarsi
        const animatedElements = document.querySelectorAll(
            '.section-header, .dish-card, .info-card, .about-text, .about-image'
        );
        
        animatedElements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }
    
    handleScrollAnimations() {
        // Parallax effect per hero background
        const hero = document.querySelector('.hero-background');
        if (hero) {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            hero.style.transform = `translateY(${parallax}px)`;
        }
    }
}

// Funzioni globali per compatibilità
window.changeLanguage = function(lang) {
    if (window.mikunaWebsite) {
        window.mikunaWebsite.changeLanguage(lang);
    }
};

// Utility functions
const utils = {
    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Smooth scroll to element
    scrollToElement(selector, offset = 0) {
        const element = document.querySelector(selector);
        if (element) {
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    },
    
    // Format phone number for WhatsApp
    formatPhoneForWhatsApp(phone) {
        return phone.replace(/\D/g, '');
    },
    
    // Create WhatsApp URL
    createWhatsAppURL(phone, message) {
        const formattedPhone = this.formatPhoneForWhatsApp(phone);
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    }
};

// Inizializzazione quando il DOM è pronto
document.addEventListener('DOMContentLoaded', () => {
    // Inizializza il sito
    window.mikunaWebsite = new MikunaWebsite();
    
    // Preload delle immagini critiche
    const criticalImages = [
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Ottimizzazione delle performance
    const debouncedResize = utils.debounce(() => {
        if (window.mikunaWebsite) {
            window.mikunaWebsite.updateCarousel();
        }
    }, 250);
    
    window.addEventListener('resize', debouncedResize);
    
    // Gestione della navigazione attiva
    const updateActiveNav = () => {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage || 
                (currentPage === '' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
    };
    
    updateActiveNav();
    
    console.log('🍽️ Mikuna Website initialized successfully!');
});

// Service Worker registration per PWA (opzionale)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Decommentare se si vuole aggiungere un service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(registrationError => console.log('SW registration failed'));
    });
}

// Menu Filter System
function initMenuFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    if (filterBtns.length === 0) return; // Only init if on menu page
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter menu items
            menuItems.forEach(item => {
                const tags = item.querySelectorAll('.menu-tag');
                let shouldShow = filter === 'all';
                
                if (filter !== 'all') {
                    tags.forEach(tag => {
                        if (tag.classList.contains(filter)) {
                            shouldShow = true;
                        }
                    });
                }
                
                if (shouldShow) {
                    item.style.display = 'flex';
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Track filter usage
            if (typeof gtag !== 'undefined') {
                gtag('event', 'menu_filter', {
                    'event_category': 'engagement',
                    'event_label': filter
                });
            }
        });
    });
}

// FAQ Carousel functionality
class FAQCarousel {
    constructor() {
        this.carousel = document.getElementById('faq-carousel');
        this.track = document.getElementById('faq-carousel-track');
        this.prevBtn = document.getElementById('faq-prev');
        this.nextBtn = document.getElementById('faq-next');
        this.indicatorsContainer = document.getElementById('faq-indicators');
        
        if (!this.carousel || !this.track) return;
        
        this.items = this.track.querySelectorAll('.faq-item');
        this.currentIndex = 0;
        this.itemsPerView = this.getItemsPerView();
        this.totalItems = this.items.length;
        this.autoScrollTimer = null;
        this.autoScrollDelay = 3000;
        this.isUserInteracting = false;
        
        this.init();
    }
    
    init() {
        this.createIndicators();
        
        // Piccolo delay per assicurarsi che il CSS sia applicato
        setTimeout(() => {
            this.updateView();
            this.bindEvents();
            this.startAutoScroll();
        }, 50);
        
        // Update on window resize with debounce
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.updateView();
            }, 150);
        });
    }
    
    getItemsPerView() {
        // Sempre mostra 1 card alla volta con anticipazione
        return 1;
    }
    
    getItemWidth() {
        // Calcola la larghezza dinamica basata sul dispositivo
        const containerWidth = this.carousel.offsetWidth;
        if (window.innerWidth <= 480) {
            // Usa la larghezza effettiva del primo elemento se disponibile
            const firstItem = this.items[0];
            if (firstItem) {
                return firstItem.offsetWidth;
            }
            return window.innerWidth - 120; // fallback
        } else if (window.innerWidth <= 768) {
            // Usa la larghezza effettiva del primo elemento se disponibile
            const firstItem = this.items[0];
            if (firstItem) {
                return firstItem.offsetWidth;
            }
            return window.innerWidth - 140; // fallback
        } else if (window.innerWidth <= 1024) {
            return containerWidth - 100; // container - spacing
        } else {
            return containerWidth - 120; // container - spacing
        }
    }
    
    getActualGap() {
        // Usa valori fissi per maggiore stabilità
        if (window.innerWidth <= 480) {
            return 24; // gap fisso per mobile piccolo
        } else if (window.innerWidth <= 768) {
            return 24; // gap fisso per mobile
        } else {
            return 32; // gap fisso per desktop
        }
    }
    
    createIndicators() {
        this.indicatorsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalItems; i++) {
            const indicator = document.createElement('button');
            indicator.classList.add('faq-indicator');
            indicator.setAttribute('aria-label', `Vai alla FAQ ${i + 1}`);
            if (i === 0) indicator.classList.add('active');
            
            indicator.addEventListener('click', () => {
                this.goToSlide(i);
                this.resetAutoScroll();
            });
            
            this.indicatorsContainer.appendChild(indicator);
        }
    }
    
    updateView() {
        const maxIndex = Math.max(0, this.totalItems - 1);
        this.currentIndex = Math.min(this.currentIndex, maxIndex);
        
        let translateX;
        
        if (window.innerWidth <= 768) {
            // Logica specifica per mobile - centratura precisa
            const itemWidth = this.getItemWidth();
            const gap = this.getActualGap();
            const containerWidth = this.carousel.offsetWidth;
            
            // Calcola la posizione per centrare la card corrente
            // Ogni card deve essere centrata nel container
            const centerPosition = (containerWidth - itemWidth) / 2;
            
            // Calcola la posizione del track per centrare la card corrente
            // La prima card (index 0) deve essere a centerPosition
            // Ogni card successiva si sposta di (itemWidth + gap) verso sinistra
            translateX = centerPosition - (this.currentIndex * (itemWidth + gap));
            
        } else {
            // Logica desktop (che già funziona bene)
            const itemWidth = this.getItemWidth();
            const gap = 32;
            const containerCenter = this.carousel.offsetWidth / 2;
            const itemCenter = itemWidth / 2;
            
            const baseTranslateX = containerCenter - itemCenter;
            translateX = baseTranslateX - (this.currentIndex * (itemWidth + gap));
        }
        
        this.track.style.transform = `translateX(${translateX}px)`;
        
        // Aggiorna gli stati delle card
        this.items.forEach((item, index) => {
            item.classList.remove('active', 'next-preview');
            
            if (index === this.currentIndex) {
                item.classList.add('active');
            } else if (index === this.currentIndex + 1) {
                item.classList.add('next-preview');
            }
        });
        
        // Update indicators
        const indicators = this.indicatorsContainer.querySelectorAll('.faq-indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
        
        // Update button states
        if (this.prevBtn && this.nextBtn) {
            this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.6' : '1';
            this.nextBtn.style.opacity = this.currentIndex >= maxIndex ? '0.6' : '1';
        }
    }
    
    goToSlide(index) {
        const maxIndex = Math.max(0, this.totalItems - 1);
        this.currentIndex = Math.max(0, Math.min(index, maxIndex));
        this.updateView();
    }
    
    next() {
        const maxIndex = Math.max(0, this.totalItems - 1);
        if (this.currentIndex < maxIndex) {
            this.currentIndex++;
            this.updateView();
        } else {
            // Loop back to start for auto-scroll
            this.currentIndex = 0;
            this.updateView();
        }
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateView();
        }
    }
    
    bindEvents() {
        // Navigation buttons
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.prev();
                this.resetAutoScroll();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.next();
                this.resetAutoScroll();
            });
        }
        
        // Touch/mouse events for dragging
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let currentY = 0;
        let isDragging = false;
        let startTransform = 0;
        
        const handleStart = (e) => {
            isDragging = true;
            this.isUserInteracting = true;
            startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
            startY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
            
            const currentTransform = getComputedStyle(this.track).transform;
            const matrix = new DOMMatrix(currentTransform);
            startTransform = matrix.m41;
            
            this.track.classList.add('dragging');
            this.stopAutoScroll();
        };
        
        const handleMove = (e) => {
            if (!isDragging) return;
            
            currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
            const deltaX = currentX - startX;
            
            // Controlla se il movimento è principalmente orizzontale
            if (e.touches) {
                currentY = e.touches[0].clientY;
                const deltaY = Math.abs(currentY - startY);
                const deltaXAbs = Math.abs(deltaX);
                
                // Se il movimento è più orizzontale che verticale, previeni lo scroll
                if (deltaXAbs > deltaY) {
                    e.preventDefault();
                }
            } else {
                e.preventDefault();
            }
            
            const newTransform = startTransform + deltaX;
            this.track.style.transform = `translateX(${newTransform}px)`;
        };
        
        const handleEnd = () => {
            if (!isDragging) return;
            isDragging = false;
            this.isUserInteracting = false;
            
            this.track.classList.remove('dragging');
            
            const deltaX = currentX - startX;
            const threshold = 50;
            
            if (Math.abs(deltaX) > threshold) {
                if (deltaX > 0) {
                    this.prev();
                } else {
                    this.next();
                }
            } else {
                this.updateView(); // Snap back to current position
            }
            
            this.resetAutoScroll();
        };
        
        // Mouse events
        this.track.addEventListener('mousedown', handleStart);
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleEnd);
        
        // Touch events
        this.track.addEventListener('touchstart', handleStart, { passive: false });
        this.track.addEventListener('touchmove', handleMove, { passive: false });
        this.track.addEventListener('touchend', handleEnd);
        
        // Pause auto-scroll on hover
        this.carousel.addEventListener('mouseenter', () => {
            this.isUserInteracting = true;
            this.stopAutoScroll();
        });
        
        this.carousel.addEventListener('mouseleave', () => {
            this.isUserInteracting = false;
            this.resetAutoScroll();
        });
    }
    
    startAutoScroll() {
        if (this.autoScrollTimer) return;
        
        this.autoScrollTimer = setInterval(() => {
            if (!this.isUserInteracting) {
                this.next();
            }
        }, this.autoScrollDelay);
    }
    
    stopAutoScroll() {
        if (this.autoScrollTimer) {
            clearInterval(this.autoScrollTimer);
            this.autoScrollTimer = null;
        }
    }
    
    resetAutoScroll() {
        this.stopAutoScroll();
        setTimeout(() => {
            if (!this.isUserInteracting) {
                this.startAutoScroll();
            }
        }, 1000);
    }
}

// Initialize menu filters on page load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initMenuFilters, 500);
    
    // Initialize FAQ Carousel
    setTimeout(() => {
        new FAQCarousel();
    }, 100);
});

// ... existing code ...
function showBestsellerInsight(event) {
    event.stopPropagation();
    var popup = document.getElementById('bestseller-insight');
    if (popup) {
        popup.style.display = 'flex';
        setTimeout(function() {
            document.addEventListener('click', closeBestsellerInsight, { once: true });
        }, 10);
    }
}
function closeBestsellerInsight() {
    var popup = document.getElementById('bestseller-insight');
    if (popup) popup.style.display = 'none';
}
// ... existing code ... 

// --- INIZIO LOGICA SEZIONE ATTIVA MENU ---
document.addEventListener('DOMContentLoaded', () => {
  // ... esistente ...
  // Evidenzia dinamicamente la sezione attiva nel filtro menù
  const navLinks = document.querySelectorAll('.menu-nav-link');
  const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  function updateActiveMenuSection() {
    let scrollPos = window.scrollY + 120; // offset per sticky nav
    let currentSection = sections[0];
    for (let section of sections) {
      if (section.offsetTop <= scrollPos) {
        currentSection = section;
      }
    }
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = Array.from(navLinks).find(link => link.getAttribute('href') === `#${currentSection.id}`);
    if (activeLink) activeLink.classList.add('active');
  }
  window.addEventListener('scroll', updateActiveMenuSection);
  updateActiveMenuSection();
});
// --- FINE LOGICA SEZIONE ATTIVA MENU ---