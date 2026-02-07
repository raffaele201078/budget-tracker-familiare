// Price Search Backend API Simulation
// Comprehensive Italian supermarket price comparison system

const PriceSearchAPI = {
    // Database of Italian food products with realistic pricing
    products: {
        // Dairy Products
        'latte': {
            name: 'Latte Fresco Intero 1L',
            category: 'latticini',
            basePrice: 1.35,
            variations: ['latte fresco', 'latte intero', 'latte parzialmente scremato', 'latte scremato']
        },
        'yogurt': {
            name: 'Yogurt Bianco 125g',
            category: 'latticini',
            basePrice: 0.89,
            variations: ['yogurt greco', 'yogurt alla frutta', 'yogurt bianco']
        },
        'formaggio': {
            name: 'Parmigiano Reggiano 200g',
            category: 'latticini',
            basePrice: 4.50,
            variations: ['parmigiano', 'grana padano', 'pecorino', 'mozzarella']
        },
        'burro': {
            name: 'Burro 250g',
            category: 'latticini',
            basePrice: 2.20,
            variations: ['burro salato', 'burro dolce']
        },

        // Bakery & Grains
        'pane': {
            name: 'Pane Pugliese 500g',
            category: 'panetteria',
            basePrice: 1.80,
            variations: ['pane integrale', 'pane bianco', 'pane pugliese', 'pane di segale']
        },
        'pasta': {
            name: 'Pasta di Semola 500g',
            category: 'pasta',
            basePrice: 1.25,
            variations: ['spaghetti', 'penne', 'fusilli', 'rigatoni', 'pasta barilla', 'pasta de cecco']
        },
        'riso': {
            name: 'Riso Carnaroli 1kg',
            category: 'cereali',
            basePrice: 2.80,
            variations: ['riso arborio', 'riso basmati', 'riso integrale']
        },
        'farina': {
            name: 'Farina 00 1kg',
            category: 'cereali',
            basePrice: 1.10,
            variations: ['farina integrale', 'farina manitoba', 'farina di semola']
        },

        // Meat & Fish
        'pollo': {
            name: 'Petto di Pollo 1kg',
            category: 'carne',
            basePrice: 8.90,
            variations: ['cosce di pollo', 'pollo intero', 'ali di pollo']
        },
        'manzo': {
            name: 'Carne di Manzo 1kg',
            category: 'carne',
            basePrice: 12.50,
            variations: ['bistecca', 'macinato di manzo', 'arrosto']
        },
        'prosciutto': {
            name: 'Prosciutto Crudo 100g',
            category: 'salumi',
            basePrice: 3.20,
            variations: ['prosciutto cotto', 'speck', 'bresaola']
        },
        'salmone': {
            name: 'Salmone Fresco 500g',
            category: 'pesce',
            basePrice: 9.80,
            variations: ['salmone affumicato', 'tonno fresco', 'branzino']
        },

        // Fruits & Vegetables
        'mele': {
            name: 'Mele Golden 1kg',
            category: 'frutta',
            basePrice: 2.30,
            variations: ['mele rosse', 'mele verdi', 'mele fuji']
        },
        'banane': {
            name: 'Banane 1kg',
            category: 'frutta',
            basePrice: 1.90,
            variations: ['banane bio', 'banane fairtrade']
        },
        'arance': {
            name: 'Arance 1kg',
            category: 'frutta',
            basePrice: 2.10,
            variations: ['arance rosse', 'arance bionde', 'arance bio']
        },
        'pomodori': {
            name: 'Pomodori Freschi 1kg',
            category: 'verdura',
            basePrice: 2.80,
            variations: ['pomodori ciliegino', 'pomodori san marzano', 'pomodori datterini']
        },
        'insalata': {
            name: 'Insalata Mista 200g',
            category: 'verdura',
            basePrice: 1.50,
            variations: ['lattuga', 'rucola', 'spinaci', 'insalata iceberg']
        },
        'patate': {
            name: 'Patate 2kg',
            category: 'verdura',
            basePrice: 2.20,
            variations: ['patate rosse', 'patate dolci', 'patate novelle']
        },
        'carote': {
            name: 'Carote 1kg',
            category: 'verdura',
            basePrice: 1.40,
            variations: ['carote baby', 'carote bio']
        },
        'cipolle': {
            name: 'Cipolle Bianche 1kg',
            category: 'verdura',
            basePrice: 1.30,
            variations: ['cipolle rosse', 'cipollotti', 'scalogno']
        },

        // Pantry Staples
        'olio': {
            name: 'Olio Extravergine di Oliva 500ml',
            category: 'condimenti',
            basePrice: 4.50,
            variations: ['olio di semi', 'olio di girasole', 'olio evo', 'olio di oliva']
        },
        'aceto': {
            name: 'Aceto di Vino 500ml',
            category: 'condimenti',
            basePrice: 1.80,
            variations: ['aceto balsamico', 'aceto di mele']
        },
        'sale': {
            name: 'Sale Fino 1kg',
            category: 'condimenti',
            basePrice: 0.60,
            variations: ['sale grosso', 'sale marino', 'sale iodato']
        },
        'zucchero': {
            name: 'Zucchero Semolato 1kg',
            category: 'dolci',
            basePrice: 1.20,
            variations: ['zucchero di canna', 'zucchero a velo']
        },
        'caffè': {
            name: 'Caffè Macinato 250g',
            category: 'bevande',
            basePrice: 3.80,
            variations: ['caffè in grani', 'caffè lavazza', 'caffè illy', 'caffè decaffeinato']
        },
        'tè': {
            name: 'Tè Nero 20 bustine',
            category: 'bevande',
            basePrice: 2.40,
            variations: ['tè verde', 'tè alla camomilla', 'tè earl grey']
        },

        // Canned & Preserved
        'pelati': {
            name: 'Pomodori Pelati 400g',
            category: 'conserve',
            basePrice: 0.95,
            variations: ['passata di pomodoro', 'concentrato di pomodoro']
        },
        'tonno': {
            name: 'Tonno in Scatola 160g',
            category: 'conserve',
            basePrice: 1.80,
            variations: ['tonno all\'olio', 'tonno al naturale', 'salmone in scatola']
        },
        'fagioli': {
            name: 'Fagioli Cannellini 400g',
            category: 'legumi',
            basePrice: 1.20,
            variations: ['ceci', 'lenticchie', 'fagioli borlotti']
        },

        // Frozen Foods
        'gelato': {
            name: 'Gelato Vaschetta 500ml',
            category: 'surgelati',
            basePrice: 3.50,
            variations: ['gelato al cioccolato', 'gelato alla vaniglia', 'sorbetto']
        },
        'verdure surgelate': {
            name: 'Verdure Miste Surgelate 450g',
            category: 'surgelati',
            basePrice: 2.30,
            variations: ['piselli surgelati', 'spinaci surgelati', 'minestrone surgelato']
        },

        // Cleaning & Household
        'detersivo': {
            name: 'Detersivo Lavatrice 1L',
            category: 'pulizia',
            basePrice: 3.20,
            variations: ['detersivo piatti', 'ammorbidente', 'candeggina']
        },
        'carta igienica': {
            name: 'Carta Igienica 12 rotoli',
            category: 'casa',
            basePrice: 4.80,
            variations: ['fazzoletti', 'carta da cucina', 'tovaglioli']
        },

        // Baby & Personal Care
        'shampoo': {
            name: 'Shampoo 250ml',
            category: 'igiene',
            basePrice: 2.90,
            variations: ['balsamo', 'bagnoschiuma', 'dentifricio']
        },
        'pannolini': {
            name: 'Pannolini Taglia 4 (30pz)',
            category: 'bambini',
            basePrice: 12.50,
            variations: ['salviette umidificate', 'latte detergente']
        }
    },

    // Supermarket chains with realistic pricing strategies
    supermarkets: {
        'Conad': {
            name: 'Conad',
            priceMultiplier: 1.05, // Slightly above average
            phone: '06 9876543',
            hours: '8:00-20:00',
            services: ['Parcheggio gratuito', 'Carta fedeltà', 'Consegna a domicilio']
        },
        'Eurospin': {
            name: 'Eurospin',
            priceMultiplier: 0.85, // Discount chain
            phone: '06 9876544',
            hours: '8:30-19:30',
            services: ['Prezzi bassi', 'Offerte settimanali', 'Parcheggio']
        },
        'Lidl': {
            name: 'Lidl',
            priceMultiplier: 0.88, // Discount chain
            phone: '06 9876545',
            hours: '8:00-20:00',
            services: ['Prodotti tedeschi', 'Offerte speciali', 'Bakery']
        },
        'Top Supermercati': {
            name: 'Top Supermercati',
            priceMultiplier: 0.95, // Competitive pricing
            phone: '06 9876546',
            hours: '7:30-20:30',
            services: ['Prodotti locali', 'Gastronomia', 'Macelleria']
        },
        'Carrefour': {
            name: 'Carrefour',
            priceMultiplier: 1.08, // Premium positioning
            phone: '06 9876547',
            hours: '8:00-21:00',
            services: ['Ampia scelta', 'Prodotti bio', 'Centro commerciale']
        }
    },

    // Geographic data for postal codes (CAP)
    locations: {
        // Castelli Romani Area (including 00049)
        '00049': {
            city: 'Velletri',
            region: 'Lazio',
            stores: {
                'Conad': { address: 'Via Appia Nord, 45 - Velletri', distance: '0.8 km' },
                'Eurospin': { address: 'Via dei Cappuccini, 12 - Velletri', distance: '1.2 km' },
                'Lidl': { address: 'Via Paganico, 78 - Velletri', distance: '1.5 km' },
                'Top Supermercati': { address: 'Corso della Repubblica, 23 - Velletri', distance: '0.5 km' },
                'Carrefour': { address: 'Via Nettunense, 156 - Velletri', distance: '2.1 km' }
            }
        },
        '00040': {
            city: 'Ariccia',
            region: 'Lazio',
            stores: {
                'Conad': { address: 'Via Borgo San Rocco, 15 - Ariccia', distance: '0.6 km' },
                'Eurospin': { address: 'Via Nettunense, 89 - Ariccia', distance: '1.0 km' },
                'Lidl': { address: 'Via Appia Nuova, 234 - Ariccia', distance: '1.3 km' },
                'Top Supermercati': { address: 'Piazza di Corte, 8 - Ariccia', distance: '0.4 km' },
                'Carrefour': { address: 'Via dei Laghi, 67 - Ariccia', distance: '1.8 km' }
            }
        },
        '00041': {
            city: 'Albano Laziale',
            region: 'Lazio',
            stores: {
                'Conad': { address: 'Via Appia, 123 - Albano Laziale', distance: '0.7 km' },
                'Eurospin': { address: 'Via Olivella, 45 - Albano Laziale', distance: '1.1 km' },
                'Lidl': { address: 'Via Nettunense, 178 - Albano Laziale', distance: '1.4 km' },
                'Top Supermercati': { address: 'Corso Matteotti, 56 - Albano Laziale', distance: '0.3 km' },
                'Carrefour': { address: 'Via dei Cappuccini, 234 - Albano Laziale', distance: '1.9 km' }
            }
        },
        // Rome Area
        '00118': {
            city: 'Roma EUR',
            region: 'Lazio',
            stores: {
                'Conad': { address: 'Viale Europa, 190 - Roma', distance: '0.5 km' },
                'Eurospin': { address: 'Via Cristoforo Colombo, 456 - Roma', distance: '0.8 km' },
                'Lidl': { address: 'Via Laurentina, 234 - Roma', distance: '1.2 km' },
                'Top Supermercati': { address: 'Piazzale Konrad Adenauer, 8 - Roma', distance: '0.3 km' },
                'Carrefour': { address: 'Viale Oceania, 85 - Roma', distance: '1.5 km' }
            }
        },
        '00119': {
            city: 'Roma Fonte Ostiense',
            region: 'Lazio',
            stores: {
                'Conad': { address: 'Via Ostiense, 567 - Roma', distance: '0.6 km' },
                'Eurospin': { address: 'Via del Mare, 123 - Roma', distance: '0.9 km' },
                'Lidl': { address: 'Via Laurentina, 789 - Roma', distance: '1.1 km' },
                'Top Supermercati': { address: 'Via di Acilia, 45 - Roma', distance: '0.4 km' },
                'Carrefour': { address: 'Via Cristoforo Colombo, 890 - Roma', distance: '1.6 km' }
            }
        },
        // Milan Area
        '20121': {
            city: 'Milano Centro',
            region: 'Lombardia',
            stores: {
                'Conad': { address: 'Corso Buenos Aires, 45 - Milano', distance: '0.4 km' },
                'Eurospin': { address: 'Via Padova, 123 - Milano', distance: '0.7 km' },
                'Lidl': { address: 'Viale Monza, 234 - Milano', distance: '1.0 km' },
                'Top Supermercati': { address: 'Via Brera, 12 - Milano', distance: '0.2 km' },
                'Carrefour': { address: 'Corso di Porta Ticinese, 67 - Milano', distance: '1.3 km' }
            }
        },
        // Naples Area
        '80121': {
            city: 'Napoli Centro',
            region: 'Campania',
            stores: {
                'Conad': { address: 'Via Toledo, 234 - Napoli', distance: '0.3 km' },
                'Eurospin': { address: 'Corso Umberto I, 567 - Napoli', distance: '0.6 km' },
                'Lidl': { address: 'Via Chiaia, 89 - Napoli', distance: '0.9 km' },
                'Top Supermercati': { address: 'Piazza del Plebiscito, 15 - Napoli', distance: '0.2 km' },
                'Carrefour': { address: 'Via dei Mille, 123 - Napoli', distance: '1.2 km' }
            }
        }
    },

    // Fuzzy search algorithm for product matching
    fuzzySearch: function(query, productKey) {
        const product = this.products[productKey];
        if (!product) return 0;

        const searchTerms = query.toLowerCase().split(' ');
        const productTerms = [
            productKey,
            product.name.toLowerCase(),
            ...product.variations.map(v => v.toLowerCase())
        ];

        let score = 0;
        searchTerms.forEach(searchTerm => {
            productTerms.forEach(productTerm => {
                if (productTerm.includes(searchTerm) || searchTerm.includes(productTerm)) {
                    score += searchTerm.length / productTerm.length;
                }
            });
        });

        return score;
    },

    // Main search function
    searchProduct: function(query, cap) {
        if (!query || !cap) return null;

        // Find location data
        const location = this.locations[cap];
        if (!location) return null;

        // Search for matching products
        const results = [];
        const searchQuery = query.toLowerCase().trim();

        Object.keys(this.products).forEach(productKey => {
            const score = this.fuzzySearch(searchQuery, productKey);
            if (score > 0.3) { // Minimum relevance threshold
                const product = this.products[productKey];
                const stores = [];

                // Generate prices for each supermarket
                Object.keys(this.supermarkets).forEach(supermarketKey => {
                    const supermarket = this.supermarkets[supermarketKey];
                    const storeLocation = location.stores[supermarketKey];
                    
                    if (storeLocation) {
                        // Calculate price with some randomization
                        const basePrice = product.basePrice;
                        const multiplier = supermarket.priceMultiplier;
                        const randomVariation = 0.95 + (Math.random() * 0.1); // ±5% random variation
                        const finalPrice = basePrice * multiplier * randomVariation;

                        stores.push({
                            name: supermarket.name,
                            price: Math.round(finalPrice * 100) / 100, // Round to 2 decimals
                            address: storeLocation.address,
                            distance: storeLocation.distance,
                            phone: supermarket.phone,
                            hours: supermarket.hours,
                            services: supermarket.services
                        });
                    }
                });

                if (stores.length > 0) {
                    results.push({
                        productName: product.name,
                        category: product.category,
                        stores: stores,
                        relevanceScore: score
                    });
                }
            }
        });

        // Sort by relevance score
        results.sort((a, b) => b.relevanceScore - a.relevanceScore);
        
        // Return top 3 most relevant results
        return results.slice(0, 3);
    },

    // Shopping list optimization
    optimizeShoppingRoute: function(shoppingList) {
        if (!shoppingList || shoppingList.length === 0) return null;

        // Group products by store
        const storeGroups = {};
        let totalCost = 0;

        shoppingList.forEach(item => {
            if (!storeGroups[item.store]) {
                storeGroups[item.store] = {
                    store: item.store,
                    products: [],
                    totalCost: 0
                };
            }
            storeGroups[item.store].products.push(item.product);
            storeGroups[item.store].totalCost += item.price;
            totalCost += item.price;
        });

        // Create optimized route (sorted by proximity)
        const route = Object.values(storeGroups).map(group => ({
            store: group.store,
            products: group.products,
            totalCost: group.totalCost,
            distance: this.getRandomDistance()
        }));

        // Sort by distance for optimal route
        route.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));

        const totalDistance = route.reduce((sum, stop) => sum + parseFloat(stop.distance), 0).toFixed(1) + ' km';
        const estimatedTime = Math.ceil(route.length * 15 + totalDistance * 2) + ' minuti';

        return {
            route: route,
            totalCost: totalCost,
            totalDistance: totalDistance,
            estimatedTime: estimatedTime,
            stopsCount: route.length
        };
    },

    // Helper function for random distance generation
    getRandomDistance: function() {
        return (0.3 + Math.random() * 2.0).toFixed(1) + ' km';
    }
};

// Make API available globally
if (typeof window !== 'undefined') {
    window.PriceSearchAPI = PriceSearchAPI;
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PriceSearchAPI;
}
