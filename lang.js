// assets/lang.js – simple internationalisation support for ProfitPlate v2
// Define translations for supported languages and apply them based on settings.
(function () {
  const translations = {
    /**
     * English translations act as the base language.  Only keys defined here
     * will be replaced on the page.  Additional languages should mirror
     * this structure.  See README for guidelines on adding new keys.
     */
    en: {
      // Navigation
      nav_home: "Home",
      nav_purchases: "Purchases",
      nav_recipes: "Recipes",
      nav_settings: "Settings",
      // Hero / home page
      hero_subtitle: "Know your profit per plate.",
      home_headline: "Stop guessing. Know your dish cost.",
      home_p1:
        "ProfitPlate helps small restaurants calculate real cost per dish, cost per portion and profit margin — in seconds.",
      // Feature list on home page
      feature_costing_title: "Ingredient‑based costing",
      feature_costing_desc:
        "Add ingredients once, use them in any recipe. ProfitPlate calculates cost per portion automatically using your latest supplier prices.",
      feature_live_title: "Live price updates",
      feature_live_desc:
        "Update supplier prices once and see every affected dish update instantly. Perfect when butter, pancetta, salmon or fries jump in price overnight.",
      feature_built_title: "Built for real kitchens",
      feature_built_desc:
        "Designed by a working chef, not an accountant. Simple enough to use during service, powerful enough for menu‑planning days.",
      feature_pdf_title: "Clean PDF exports (future)",
      feature_pdf_desc:
        "Export dish costing sheets you can print or share. The current version focuses on your data — syncing and exports are on the roadmap.",
      how_fits_title: "How ProfitPlate fits in your day",
      how_step1_title: "Update your Purchases.",
      how_step1_desc:
        "Add or edit items from your latest invoices — butter, pancetta, flour. Set category, sub‑type, unit and price (or use the pack helper if the invoice is weird).",
      how_step2_title: "Build your Recipes.",
      how_step2_desc:
        "Pick ingredients from Purchases, set the quantities you actually use in the dish. ProfitPlate calculates batch cost and cost per portion automatically.",
      how_step3_title: "Check margin & iterate.",
      how_step3_desc:
        "Adjust selling price until the margin looks healthy. When you’re happy, print a clean sheet or keep it for later.",
      where_today_title: "Where the app is today",
      where_today_desc:
        "This version runs entirely in your browser — no login, no cloud, just your device. You can test Purchases, Recipes and Settings locally. In a future release, online accounts and syncing will come next.",
      // Purchases page
      purchases_title: "Purchases",
      purchases_intro:
        "This is your ingredient base. Add items you buy, organise them by category, and keep supplier prices up to date. Recipes will use everything you add here.",
      purchases_add_btn: "Add item",
      purchases_add_title: "Add a new purchase item",
      field_name: "Name",
      field_category: "Category",
      field_subtype: "Sub‑type",
      field_unit: "Unit (for recipes)",
      field_price: "Purchase price (per recipe unit)",
      field_supplier: "Supplier",
      field_invoice_number: "Invoice number",
      field_invoice_date: "Invoice date",
      field_notes: "Notes (storage, etc.)",
      pack_helper_summary: "Use pack helper",
      pack_example: "Example: 100 g for 5 € → auto‑converts price per unit.",
      pack_quantity: "Pack quantity",
      pack_unit: "Pack unit",
      pack_price: "Pack price (€)",
      pack_use: "Use pack",
      price_history_title: "Price history",
      price_history_desc: "Last 10 recorded price changes for this ingredient (newest first).",
      btn_cancel: "Cancel",
      btn_save_item: "Save item",
      recently_updated_title: "Recently updated",
      all_ingredients_title: "All ingredients",
      search_placeholder: "Search…",
      all_categories_option: "All categories",
      btn_print_list: "Print list",
      table_ingredient: "Ingredient",
      table_category: "Category",
      table_subtype: "Sub‑type",
      table_supplier: "Supplier",
      table_invoice: "Invoice #",
      table_unit: "Unit",
      table_price: "Latest price",
      table_updated: "Last updated",
      table_actions: "Actions",
      // Recipes page
      recipes_title: "Recipes",
      recipes_intro:
        "Build your recipes by picking ingredients from Purchases and see cost per portion, selling price and margin. Each recipe is saved locally in your browser.",
      recipes_add_btn: "Add recipe",
      recipes_form_title: "Add a new recipe",
      recipe_name: "Name",
      recipe_portions: "Portions per batch",
      recipe_price: "Selling price (optional)",
      add_ingredient_btn: "Add ingredient",
      btn_save_recipe: "Save recipe",
      recipe_search_placeholder: "Search recipes…",
      show_archived_label: "Show archived",
      // Settings page
      settings_title: "Settings",
      settings_intro:
        "Adjust how ProfitPlate behaves in your kitchen – currency, display options and data controls. In the real app, these settings would be stored in your account and synced across devices.",
      settings_general: "General",
      settings_behaviour: "Behaviour",
      settings_data: "Data & Local Storage",
      demo_data_title: "Demo Data",
      remove_demo_btn: "Remove Demo Items",
      import_export_title: "Import/Export",
      export_data_btn: "Export Data",
      import_data_btn: "Import Data",
      danger_zone_title: "Danger Zone",
      delete_data_btn: "Delete My Data",
      delete_warning: "Delete ALL your Purchases and Recipes. This cannot be undone.",

      // Additional settings labels
      field_currency: "Currency",
      field_number_format: "Number format",
      field_language: "Language",
      data_intro: "ProfitPlate keeps everything in your browser. No server, no cloud.",
      auto_recalc_label: "Auto‑recalculate recipes",
      auto_recalc_desc: "When an ingredient price changes in Purchases, update recipe costs automatically.",
      show_advanced_label: "Show advanced details",
      show_advanced_desc: "Display margin %, batch cost and ingredient breakdown by default. Turn off for a simpler view.",
    },
    /**
     * Romanian translations for kitchen terminology.  Some phrases are adapted
     * to be clearer in a professional kitchen context (e.g. the motto).
     */
    ro: {
      nav_home: "Acasă",
      nav_purchases: "Achiziții",
      nav_recipes: "Rețete",
      nav_settings: "Setări",
      hero_subtitle: "Află profitul pe porție.",
      home_headline: "Nu mai ghici. Afla costul per portie.",
      home_p1:
        "ProfitPlate ajută restaurantele mici să calculeze costul real per preparat, costul per porție și marja de profit — în câteva secunde.",
      feature_costing_title: "Costuri pe bază de ingrediente",
      feature_costing_desc:
        "Adaugă ingredientele o singură dată, folosește‑le în orice rețetă. ProfitPlate calculează automat costul pe porție folosind cele mai recente prețuri ale furnizorului.",
      feature_live_title: "Actualizări de preț în timp real",
      feature_live_desc:
        "Actualizează o singură dată prețurile furnizorilor și vezi cum se actualizează instantaneu toate preparatele afectate. Perfect când untul, pancetta, somonul sau cartofii prăjiți se scumpesc peste noapte.",
      feature_built_title: "Construit pentru bucătării reale",
      feature_built_desc:
        "Proiectat de un bucătar practicant, nu de un contabil. Suficient de simplu de utilizat în timpul serviciului, dar suficient de puternic pentru zilele de planificare a meniului.",
      feature_pdf_title: "Exporturi PDF curate (viitor)",
      feature_pdf_desc:
        "Exportă fișe de cost pentru preparate pe care le poți imprima sau partaja. Versiunea actuală se concentrează pe datele tale — sincronizarea și exporturile sunt pe foaia de parcurs.",
      how_fits_title: "Cum se potrivește ProfitPlate în ziua ta",
      how_step1_title: "Actualizează‑ți achizițiile.",
      how_step1_desc:
        "Adaugă sau editează articole din ultimele facturi — unt, pancetta, făină. Setează categoria, sub‑tipul, unitatea și prețul (sau folosește ajutorul pentru ambalaje dacă factura este ciudată).",
      how_step2_title: "Construiește‑ți rețetele.",
      how_step2_desc:
        "Alege ingrediente din Achiziții, setează cantitățile pe care le folosești efectiv în preparat. ProfitPlate calculează automat costul per lot și costul per porție.",
      how_step3_title: "Verifică marja și ajustează.",
      how_step3_desc:
        "Ajustează prețul de vânzare până când marja arată bine. Când ești mulțumit, tipărește o fișă curată sau păstreaz‑o pentru mai târziu.",
      where_today_title: "Stadiul actual al aplicației",
      where_today_desc:
        "Această versiune rulează complet în browser — fără autentificare, fără cloud, doar pe dispozitivul tău. Poți testa Achizițiile, Rețetele și Setările local. Într‑o versiune viitoare vor urma conturile online și sincronizarea.",
      purchases_title: "Achiziții",
      purchases_intro:
        "Aceasta este baza de ingrediente. Adaugă articole pe care le cumperi, organizează‑le pe categorii și ține prețurile furnizorilor la zi. Rețetele vor folosi tot ce adaugi aici.",
      purchases_add_btn: "Adaugă articol",
      purchases_add_title: "Adaugă un articol nou",
      field_name: "Nume",
      field_category: "Categorie",
      field_subtype: "Sub‑tip",
      field_unit: "Unitate (pentru rețete)",
      field_price: "Preț de achiziție (per unitate de rețetă)",
      field_supplier: "Furnizor",
      field_invoice_number: "Număr factură",
      field_invoice_date: "Dată factură",
      field_notes: "Note (depozitare etc.)",
      pack_helper_summary: "Folosește ajutorul pentru pachet",
      pack_example: "Exemplu: 100 g pentru 5 € → convertește automat prețul per unitate.",
      pack_quantity: "Cantitate pachet",
      pack_unit: "Unitate pachet",
      pack_price: "Preț pachet (€)",
      pack_use: "Folosește pachet",
      price_history_title: "Istoric prețuri",
      price_history_desc: "Ultimele 10 modificări de preț pentru acest ingredient (cele mai noi primele).",
      btn_cancel: "Anulează",
      btn_save_item: "Salvează articol",
      recently_updated_title: "Actualizate recent",
      all_ingredients_title: "Toate ingredientele",
      search_placeholder: "Caută…",
      all_categories_option: "Toate categoriile",
      btn_print_list: "Printează lista",
      table_ingredient: "Ingredient",
      table_category: "Categorie",
      table_subtype: "Sub‑tip",
      table_supplier: "Furnizor",
      table_invoice: "Nr. factură",
      table_unit: "Unitate",
      table_price: "Ultimul preț",
      table_updated: "Ultima actualizare",
      table_actions: "Acțiuni",
      recipes_title: "Rețete",
      recipes_intro:
        "Construiește rețetele alegând ingrediente din Achiziții și vezi costul per porție, prețul de vânzare și marja. Fiecare rețetă este salvată local în browser.",
      recipes_add_btn: "Adaugă rețetă",
      recipes_form_title: "Adaugă o rețetă nouă",
      recipe_name: "Nume",
      recipe_portions: "Porții per lot",
      recipe_price: "Preț de vânzare (opțional)",
      add_ingredient_btn: "Adaugă ingredient",
      btn_save_recipe: "Salvează rețeta",
      recipe_search_placeholder: "Caută rețete…",
      show_archived_label: "Afișează arhivate",
      settings_title: "Setări",
      settings_intro:
        "Ajustează modul în care ProfitPlate se comportă în bucătăria ta – monedă, opțiuni de afișare și controlul datelor. În aplicația reală, aceste setări ar fi stocate în contul tău și sincronizate pe dispozitive.",
      settings_general: "General",
      settings_behaviour: "Comportament",
      settings_data: "Date & Stocare locală",
      demo_data_title: "Date demo",
      remove_demo_btn: "Elimină elementele demo",
      import_export_title: "Import/Export",
      export_data_btn: "Exportă date",
      import_data_btn: "Importă date",
      danger_zone_title: "Zonă periculoasă",
      delete_data_btn: "Șterge toate datele",
      delete_warning:
        "Șterge TOATE achizițiile și rețetele. Această acțiune nu poate fi anulată.",

      // Additional settings labels
      field_currency: "Monedă",
      field_number_format: "Format număr",
      field_language: "Limbă",
      data_intro: "ProfitPlate păstrează totul în browserul tău. Fără server, fără cloud.",
      auto_recalc_label: "Recalculează rețetele automat",
      auto_recalc_desc: "Când se schimbă prețul unui ingredient în Achiziții, actualizează automat costurile rețetei.",
      show_advanced_label: "Afișează detalii avansate",
      show_advanced_desc: "Afișează procentul de marjă, costul lotului și defalcarea ingredientelor în mod implicit. Dezactivează pentru o vizualizare simplă.",
    },
    /**
     * Spanish translations.
     */
    es: {
      nav_home: "Inicio",
      nav_purchases: "Compras",
      nav_recipes: "Recetas",
      nav_settings: "Ajustes",
      hero_subtitle: "Conoce tu beneficio por plato.",
      home_headline: "Deja de adivinar. Conoce el coste del plato.",
      home_p1:
        "ProfitPlate ayuda a los pequeños restaurantes a calcular el coste real por plato, el coste por porción y el margen de beneficio — en segundos.",
      feature_costing_title: "Costeo basado en ingredientes",
      feature_costing_desc:
        "Añade ingredientes una sola vez y utilízalos en cualquier receta. ProfitPlate calcula automáticamente el coste por porción utilizando tus últimos precios de proveedor.",
      feature_live_title: "Actualizaciones de precios en tiempo real",
      feature_live_desc:
        "Actualiza los precios de los proveedores una sola vez y observa cómo se actualiza al instante cada plato afectado. Perfecto cuando la mantequilla, la panceta, el salmón o las patatas fritas suben de precio de la noche a la mañana.",
      feature_built_title: "Diseñado para cocinas reales",
      feature_built_desc:
        "Diseñado por un chef en activo, no por un contable. Lo suficientemente sencillo como para usar durante el servicio, pero lo bastante potente para los días de planificación del menú.",
      feature_pdf_title: "Exportaciones PDF limpias (futuro)",
      feature_pdf_desc:
        "Exporta hojas de coste de platos que puedas imprimir o compartir. La versión actual se centra en tus datos: la sincronización y las exportaciones están en la hoja de ruta.",
      how_fits_title: "Cómo encaja ProfitPlate en tu día",
      how_step1_title: "Actualiza tus compras.",
      how_step1_desc:
        "Añade o edita artículos de tus últimas facturas — mantequilla, panceta, harina. Establece categoría, subtipo, unidad y precio (o usa el asistente de paquetes si la factura es rara).",
      how_step2_title: "Crea tus recetas.",
      how_step2_desc:
        "Elige ingredientes de Compras, establece las cantidades que realmente utilizas en el plato. ProfitPlate calcula automáticamente el coste por lote y por porción.",
      how_step3_title: "Comprueba el margen y ajusta.",
      how_step3_desc:
        "Ajusta el precio de venta hasta que el margen sea saludable. Cuando estés satisfecho, imprime una hoja limpia o guárdala para más tarde.",
      where_today_title: "Dónde se encuentra la aplicación hoy",
      where_today_desc:
        "Esta versión se ejecuta completamente en tu navegador — sin inicio de sesión, sin nube, solo tu dispositivo. Puedes probar Compras, Recetas y Ajustes localmente. En una versión futura vendrán las cuentas en línea y la sincronización.",
      purchases_title: "Compras",
      purchases_intro:
        "Esta es tu base de ingredientes. Añade artículos que compras, organízalos por categorías y mantén actualizados los precios de los proveedores. Las recetas utilizarán todo lo que añadas aquí.",
      purchases_add_btn: "Añadir artículo",
      purchases_add_title: "Añadir nuevo artículo",
      field_name: "Nombre",
      field_category: "Categoría",
      field_subtype: "Subtipo",
      field_unit: "Unidad (para recetas)",
      field_price: "Precio de compra (por unidad de receta)",
      field_supplier: "Proveedor",
      field_invoice_number: "Número de factura",
      field_invoice_date: "Fecha de factura",
      field_notes: "Notas (almacenamiento, etc.)",
      pack_helper_summary: "Usar asistente de paquete",
      pack_example: "Ejemplo: 100 g por 5 € → convierte automáticamente el precio por unidad.",
      pack_quantity: "Cantidad del paquete",
      pack_unit: "Unidad del paquete",
      pack_price: "Precio del paquete (€)",
      pack_use: "Usar paquete",
      price_history_title: "Historial de precios",
      price_history_desc:
        "Últimas 10 variaciones de precio registradas para este ingrediente (las más recientes primero).",
      btn_cancel: "Cancelar",
      btn_save_item: "Guardar artículo",
      recently_updated_title: "Actualizado recientemente",
      all_ingredients_title: "Todos los ingredientes",
      search_placeholder: "Buscar…",
      all_categories_option: "Todas las categorías",
      btn_print_list: "Imprimir lista",
      table_ingredient: "Ingrediente",
      table_category: "Categoría",
      table_subtype: "Subtipo",
      table_supplier: "Proveedor",
      table_invoice: "Factura #",
      table_unit: "Unidad",
      table_price: "Último precio",
      table_updated: "Última actualización",
      table_actions: "Acciones",
      recipes_title: "Recetas",
      recipes_intro:
        "Construye tus recetas eligiendo ingredientes de Compras y ve el coste por porción, el precio de venta y el margen. Cada receta se guarda localmente en tu navegador.",
      recipes_add_btn: "Añadir receta",
      recipes_form_title: "Añadir nueva receta",
      recipe_name: "Nombre",
      recipe_portions: "Porciones por lote",
      recipe_price: "Precio de venta (opcional)",
      add_ingredient_btn: "Añadir ingrediente",
      btn_save_recipe: "Guardar receta",
      recipe_search_placeholder: "Buscar recetas…",
      show_archived_label: "Mostrar archivadas",
      settings_title: "Ajustes",
      settings_intro:
        "Ajusta cómo se comporta ProfitPlate en tu cocina – moneda, opciones de visualización y controles de datos. En la aplicación real, estos ajustes se almacenarían en tu cuenta y se sincronizarían entre dispositivos.",
      settings_general: "General",
      settings_behaviour: "Comportamiento",
      settings_data: "Datos y almacenamiento local",
      demo_data_title: "Datos de demostración",
      remove_demo_btn: "Eliminar artículos de demostración",
      import_export_title: "Importar/Exportar",
      export_data_btn: "Exportar datos",
      import_data_btn: "Importar datos",
      danger_zone_title: "Zona peligrosa",
      delete_data_btn: "Eliminar mis datos",
      delete_warning:
        "Elimina TODAS tus compras y recetas. Esta acción no se puede deshacer.",

      // Additional settings labels
      field_currency: "Moneda",
      field_number_format: "Formato numérico",
      field_language: "Idioma",
      data_intro: "ProfitPlate mantiene todo en tu navegador. Sin servidor, sin nube.",
      auto_recalc_label: "Recalcular recetas automáticamente",
      auto_recalc_desc: "Cuando cambia el precio de un ingrediente en Compras, actualiza automáticamente los costes de la receta.",
      show_advanced_label: "Mostrar detalles avanzados",
      show_advanced_desc: "Muestra el porcentaje de margen, el coste del lote y el desglose de ingredientes por defecto. Apaga para una vista más simple.",
    },
    /**
     * French translations.
     */
    fr: {
      nav_home: "Accueil",
      nav_purchases: "Achats",
      nav_recipes: "Recettes",
      nav_settings: "Paramètres",
      hero_subtitle: "Connaissez votre bénéfice par assiette.",
      home_headline: "Arrêtez de deviner. Connaissez le coût du plat.",
      home_p1:
        "ProfitPlate aide les petits restaurants à calculer le coût réel par plat, le coût par portion et la marge bénéficiaire — en quelques secondes.",
      feature_costing_title: "Coût basé sur les ingrédients",
      feature_costing_desc:
        "Ajoutez les ingrédients une seule fois et utilisez‑les dans n’importe quelle recette. ProfitPlate calcule automatiquement le coût par portion en utilisant vos derniers prix fournisseur.",
      feature_live_title: "Mises à jour des prix en direct",
      feature_live_desc:
        "Mettez à jour une fois les prix fournisseurs et voyez chaque plat affecté se mettre à jour instantanément. Parfait lorsque le beurre, la pancetta, le saumon ou les frites augmentent du jour au lendemain.",
      feature_built_title: "Conçu pour les cuisines réelles",
      feature_built_desc:
        "Conçu par un chef en activité, pas un comptable. Assez simple pour être utilisé pendant le service, assez puissant pour les journées de planification de menu.",
      feature_pdf_title: "Exports PDF propres (à venir)",
      feature_pdf_desc:
        "Exportez des feuilles de calcul des coûts des plats que vous pouvez imprimer ou partager. La version actuelle se concentre sur vos données — la synchronisation et les exports sont au programme.",
      how_fits_title: "Comment ProfitPlate s’intègre dans votre journée",
      how_step1_title: "Mettez à jour vos achats.",
      how_step1_desc:
        "Ajoutez ou modifiez des articles de vos dernières factures — beurre, pancetta, farine. Définissez la catégorie, le sous‑type, l’unité et le prix (ou utilisez l’assistant de paquet si la facture est étrange).",
      how_step2_title: "Construisez vos recettes.",
      how_step2_desc:
        "Choisissez des ingrédients dans Achats, définissez les quantités que vous utilisez réellement dans le plat. ProfitPlate calcule automatiquement le coût par lot et par portion.",
      how_step3_title: "Vérifiez la marge et ajustez.",
      how_step3_desc:
        "Ajustez le prix de vente jusqu’à ce que la marge soit correcte. Lorsque vous êtes satisfait, imprimez une fiche propre ou conservez‑la pour plus tard.",
      where_today_title: "Où en est l’application aujourd’hui",
      where_today_desc:
        "Cette version fonctionne entièrement dans votre navigateur — pas de connexion, pas de cloud, seulement votre appareil. Vous pouvez tester Achats, Recettes et Paramètres localement. Dans une prochaine version, les comptes en ligne et la synchronisation seront au programme.",
      purchases_title: "Achats",
      purchases_intro:
        "Ceci est votre base d’ingrédients. Ajoutez les articles que vous achetez, organisez‑les par catégorie et gardez les prix fournisseurs à jour. Les recettes utiliseront tout ce que vous ajoutez ici.",
      purchases_add_btn: "Ajouter un article",
      purchases_add_title: "Ajouter un nouvel article",
      field_name: "Nom",
      field_category: "Catégorie",
      field_subtype: "Sous‑type",
      field_unit: "Unité (pour recettes)",
      field_price: "Prix d’achat (par unité de recette)",
      field_supplier: "Fournisseur",
      field_invoice_number: "Numéro de facture",
      field_invoice_date: "Date de facture",
      field_notes: "Notes (stockage, etc.)",
      pack_helper_summary: "Utiliser l’assistant de paquet",
      pack_example: "Exemple : 100 g pour 5 € → convertit automatiquement le prix par unité.",
      pack_quantity: "Quantité du paquet",
      pack_unit: "Unité du paquet",
      pack_price: "Prix du paquet (€)",
      pack_use: "Utiliser le paquet",
      price_history_title: "Historique des prix",
      price_history_desc:
        "10 dernières variations de prix enregistrées pour cet ingrédient (les plus récentes d’abord).",
      btn_cancel: "Annuler",
      btn_save_item: "Enregistrer l’article",
      recently_updated_title: "Mis à jour récemment",
      all_ingredients_title: "Tous les ingrédients",
      search_placeholder: "Rechercher…",
      all_categories_option: "Toutes les catégories",
      btn_print_list: "Imprimer la liste",
      table_ingredient: "Ingrédient",
      table_category: "Catégorie",
      table_subtype: "Sous‑type",
      table_supplier: "Fournisseur",
      table_invoice: "Facture #",
      table_unit: "Unité",
      table_price: "Dernier prix",
      table_updated: "Dernière mise à jour",
      table_actions: "Actions",
      recipes_title: "Recettes",
      recipes_intro:
        "Construisez vos recettes en choisissant des ingrédients dans Achats et voyez le coût par portion, le prix de vente et la marge. Chaque recette est enregistrée localement dans votre navigateur.",
      recipes_add_btn: "Ajouter une recette",
      recipes_form_title: "Ajouter une nouvelle recette",
      recipe_name: "Nom",
      recipe_portions: "Portions par lot",
      recipe_price: "Prix de vente (optionnel)",
      add_ingredient_btn: "Ajouter un ingrédient",
      btn_save_recipe: "Enregistrer la recette",
      recipe_search_placeholder: "Rechercher des recettes…",
      show_archived_label: "Afficher archivées",
      settings_title: "Paramètres",
      settings_intro:
        "Ajustez comment ProfitPlate se comporte dans votre cuisine – monnaie, options d’affichage et contrôle des données. Dans l’application réelle, ces paramètres seraient stockés dans votre compte et synchronisés entre appareils.",
      settings_general: "Général",
      settings_behaviour: "Comportement",
      settings_data: "Données & Stockage local",
      demo_data_title: "Données de démonstration",
      remove_demo_btn: "Supprimer les éléments de démonstration",
      import_export_title: "Importer/Exporter",
      export_data_btn: "Exporter les données",
      import_data_btn: "Importer des données",
      danger_zone_title: "Zone dangereuse",
      delete_data_btn: "Supprimer mes données",
      delete_warning:
        "Supprimez TOUTES vos Achats et Recettes. Cette action est irréversible.",

      // Additional settings labels
      field_currency: "Monnaie",
      field_number_format: "Format numérique",
      field_language: "Langue",
      data_intro: "ProfitPlate conserve tout dans votre navigateur. Pas de serveur, pas de cloud.",
      auto_recalc_label: "Recalculer les recettes automatiquement",
      auto_recalc_desc: "Lorsque le prix d’un ingrédient change dans Achats, mettez automatiquement à jour les coûts de la recette.",
      show_advanced_label: "Afficher les détails avancés",
      show_advanced_desc: "Affichez le pourcentage de marge, le coût du lot et le détail des ingrédients par défaut. Désactivez pour une vue plus simple.",
    },
    /**
     * Italian translations.
     */
    it: {
      nav_home: "Home",
      nav_purchases: "Acquisti",
      nav_recipes: "Ricette",
      nav_settings: "Impostazioni",
      hero_subtitle: "Scopri il tuo profitto per porzione.",
      home_headline: "Smetti di indovinare. Scopri il costo del piatto.",
      home_p1:
        "ProfitPlate aiuta i piccoli ristoranti a calcolare il costo reale per piatto, il costo per porzione e il margine di profitto — in pochi secondi.",
      feature_costing_title: "Costificazione basata sugli ingredienti",
      feature_costing_desc:
        "Aggiungi gli ingredienti una sola volta e usali in qualsiasi ricetta. ProfitPlate calcola automaticamente il costo per porzione utilizzando i tuoi prezzi più recenti dei fornitori.",
      feature_live_title: "Aggiornamenti dei prezzi in tempo reale",
      feature_live_desc:
        "Aggiorna i prezzi dei fornitori una sola volta e guarda come ogni piatto interessato si aggiorna all’istante. Perfetto quando burro, pancetta, salmone o patatine fritte aumentano di prezzo da un giorno all’altro.",
      feature_built_title: "Progettato per cucine reali",
      feature_built_desc:
        "Progettato da un cuoco in attività, non da un contabile. Sufficiente semplice per l’uso durante il servizio, ma abbastanza potente per i giorni di pianificazione del menu.",
      feature_pdf_title: "Esportazioni PDF pulite (futuro)",
      feature_pdf_desc:
        "Esporta schede di costo dei piatti che puoi stampare o condividere. L’attuale versione si concentra sui tuoi dati: sincronizzazione ed esportazioni sono in programma.",
      how_fits_title: "Come ProfitPlate si inserisce nella tua giornata",
      how_step1_title: "Aggiorna i tuoi acquisti.",
      how_step1_desc:
        "Aggiungi o modifica articoli dalle tue ultime fatture — burro, pancetta, farina. Imposta categoria, sottotipo, unità e prezzo (o usa l’assistente di confezione se la fattura è strana).",
      how_step2_title: "Crea le tue ricette.",
      how_step2_desc:
        "Scegli gli ingredienti dagli Acquisti e imposta le quantità che effettivamente usi nel piatto. ProfitPlate calcola automaticamente il costo per lotto e per porzione.",
      how_step3_title: "Controlla il margine e regola.",
      how_step3_desc:
        "Regola il prezzo di vendita finché il margine non è soddisfacente. Quando sei soddisfatto, stampa una scheda pulita o conservala per dopo.",
      where_today_title: "Stato attuale dell’applicazione",
      where_today_desc:
        "Questa versione funziona interamente nel tuo browser — senza login, senza cloud, solo il tuo dispositivo. Puoi testare Acquisti, Ricette e Impostazioni localmente. In una versione futura arriveranno gli account online e la sincronizzazione.",
      purchases_title: "Acquisti",
      purchases_intro:
        "Questa è la tua base di ingredienti. Aggiungi gli articoli che compri, organizzali per categorie e mantieni aggiornati i prezzi dei fornitori. Le ricette utilizzeranno tutto ciò che aggiungi qui.",
      purchases_add_btn: "Aggiungi articolo",
      purchases_add_title: "Aggiungi nuovo articolo",
      field_name: "Nome",
      field_category: "Categoria",
      field_subtype: "Sottotipo",
      field_unit: "Unità (per ricette)",
      field_price: "Prezzo di acquisto (per unità di ricetta)",
      field_supplier: "Fornitore",
      field_invoice_number: "Numero fattura",
      field_invoice_date: "Data fattura",
      field_notes: "Note (conservazione, ecc.)",
      pack_helper_summary: "Usa assistente confezione",
      pack_example: "Esempio: 100 g per 5 € → converte automaticamente il prezzo per unità.",
      pack_quantity: "Quantità confezione",
      pack_unit: "Unità confezione",
      pack_price: "Prezzo confezione (€)",
      pack_use: "Usa confezione",
      price_history_title: "Storico prezzi",
      price_history_desc:
        "Ultime 10 variazioni di prezzo registrate per questo ingrediente (le più recenti per prime).",
      btn_cancel: "Annulla",
      btn_save_item: "Salva articolo",
      recently_updated_title: "Aggiornati recentemente",
      all_ingredients_title: "Tutti gli ingredienti",
      search_placeholder: "Cerca…",
      all_categories_option: "Tutte le categorie",
      btn_print_list: "Stampa elenco",
      table_ingredient: "Ingrediente",
      table_category: "Categoria",
      table_subtype: "Sottotipo",
      table_supplier: "Fornitore",
      table_invoice: "Fattura #",
      table_unit: "Unità",
      table_price: "Ultimo prezzo",
      table_updated: "Ultimo aggiornamento",
      table_actions: "Azioni",
      recipes_title: "Ricette",
      recipes_intro:
        "Costruisci le tue ricette scegliendo ingredienti dagli Acquisti e vedi il costo per porzione, il prezzo di vendita e il margine. Ogni ricetta viene salvata localmente nel browser.",
      recipes_add_btn: "Aggiungi ricetta",
      recipes_form_title: "Aggiungi una nuova ricetta",
      recipe_name: "Nome",
      recipe_portions: "Porzioni per lotto",
      recipe_price: "Prezzo di vendita (opzionale)",
      add_ingredient_btn: "Aggiungi ingrediente",
      btn_save_recipe: "Salva ricetta",
      recipe_search_placeholder: "Cerca ricette…",
      show_archived_label: "Mostra archiviate",
      settings_title: "Impostazioni",
      settings_intro:
        "Regola il comportamento di ProfitPlate nella tua cucina – valuta, opzioni di visualizzazione e controllo dei dati. Nella vera app, queste impostazioni sarebbero memorizzate nel tuo account e sincronizzate sui dispositivi.",
      settings_general: "Generale",
      settings_behaviour: "Comportamento",
      settings_data: "Dati & Archiviazione locale",
      demo_data_title: "Dati demo",
      remove_demo_btn: "Rimuovi elementi demo",
      import_export_title: "Importa/Esporta",
      export_data_btn: "Esporta dati",
      import_data_btn: "Importa dati",
      danger_zone_title: "Zona pericolosa",
      delete_data_btn: "Elimina i miei dati",
      delete_warning:
        "Elimina TUTTI i tuoi acquisti e ricette. Questa azione non può essere annullata.",

      // Additional settings labels
      field_currency: "Valuta",
      field_number_format: "Formato numero",
      field_language: "Lingua",
      data_intro: "ProfitPlate conserva tutto nel tuo browser. Nessun server, nessun cloud.",
      auto_recalc_label: "Ricalcola automaticamente le ricette",
      auto_recalc_desc: "Quando cambia il prezzo di un ingrediente negli Acquisti, aggiorna automaticamente i costi della ricetta.",
      show_advanced_label: "Mostra dettagli avanzati",
      show_advanced_desc: "Mostra di default la percentuale di margine, il costo del lotto e il dettaglio degli ingredienti. Disattiva per una visualizzazione più semplice.",
    },
  };

  /**
   * Apply translations to all elements with a data‑i18n attribute.
   * If a translation is missing for the selected language, the key
   * remains unchanged.
   */
  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    // Translate elements with data-i18n attributes (text content)
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict && dict[key]) {
        el.textContent = dict[key];
      }
    });
    // Translate placeholder attributes when data-i18n-placeholder is set
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict && dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });
  }
  /**
   * Read the current language from settings (via loadSettings) and
   * apply translations. If loadSettings is not available, defaults to English.
   */
  function translatePage() {
    let lang = 'en';
    if (typeof window.loadSettings === 'function') {
      const settings = window.loadSettings();
      if (settings && settings.language) {
        lang = settings.language;
      }
    }
    applyLanguage(lang);
  }
  // Expose globally
  window.translatePage = translatePage;
})();