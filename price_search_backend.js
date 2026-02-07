// Sistema backend simulato per la ricerca prezzi
class PriceSearchAPI {
    constructor() {
        this.stores = {
            'esselunga': {
                name: 'Esselunga',
                logo: 'ESS',
                type: 'premium',
                priceMultiplier: 1.1
            },
            'coop': {
                name: 'Coop',
                logo: 'COOP',
                type: 'standard',
                priceMultiplier: 1.0
            },
            'carrefour': {
                name: 'Carrefour',
                logo: 'CAR',
                type: 'hypermarket',
                priceMultiplier: 0.95
            },
            'conad': {
                name: 'Conad',
                logo: 'CON',
                type: 'standard',
                priceMultiplier: 1.05
            },
            'iper': {
                name: 'Iper',
                logo: 'IPER',
                type: 'hypermarket',
                priceMultiplier: 0.9
            },
            'lidl': {
                name: 'Lidl',
                logo: 'LIDL',
                type: 'discount',
                priceMultiplier: 0.8
            },
            'eurospin': {
                name: 'Eurospin',
                logo: 'EURO',
                type: 'discount',
                priceMultiplier: 0.75
            }
        };

        this.products = {
            // Prodotti alimentari di base
            'latte': { basePrice: 1.20, unit: '1L', category: 'latticini' },
            'latte intero': { basePrice: 1.25, unit: '1L', category: 'latticini' },
            'latte parzialmente scremato': { basePrice: 1.20, unit: '1L', category: 'latticini' },
            'pane': { basePrice: 2.50, unit: '1kg', category: 'panetteria' },
            'pane integrale': { basePrice: 3.00, unit: '1kg', category: 'panetteria' },
            'pasta': { basePrice: 1.80, unit: '500g', category: 'pasta' },
            'pasta barilla': { basePrice: 2.20, unit: '500g', category: 'pasta' },
            'pasta de cecco': { basePrice: 2.50, unit: '500g', category: 'pasta' },
            'riso': { basePrice: 2.00, unit: '1kg', category: 'cereali' },
            'riso carnaroli': { basePrice: 3.50, unit: '1kg', category: 'cereali' },
            'olio oliva': { basePrice: 4.50, unit: '1L', category: 'condimenti' },
            'olio extravergine': { basePrice: 6.00, unit: '1L', category: 'condimenti' },
            
            // Carne e pesce
            'pollo': { basePrice: 8.50, unit: '1kg', category: 'carne' },
            'manzo': { basePrice: 15.00, unit: '1kg', category: 'carne' },
            'salmone': { basePrice: 18.00, unit: '1kg', category: 'pesce' },
            'tonno scatoletta': { basePrice: 1.50, unit: '160g', category: 'conserve' },
            
            // Frutta e verdura
            'mele': { basePrice: 2.50, unit: '1kg', category: 'frutta' },
            'banane': { basePrice: 2.00, unit: '1kg', category: 'frutta' },
            'pomodori': { basePrice: 3.00, unit: '1kg', category: 'verdura' },
            'insalata': { basePrice: 1.50, unit: '1 cespo', category: 'verdura' },
            'patate': { basePrice: 1.80, unit: '1kg', category: 'verdura' },
            
            // Prodotti confezionati
            'yogurt': { basePrice: 0.80, unit: '125g', category: 'latticini' },
            'biscotti': { basePrice: 2.50, unit: '350g', category: 'dolci' },
            'cereali': { basePrice: 4.00, unit: '375g', category: 'colazione' },
            'caffè': { basePrice: 3.50, unit: '250g', category: 'bevande' },
            'acqua': { basePrice: 0.30, unit: '1.5L', category: 'bevande' },
            
            // Prodotti per la casa
            'detersivo piatti': { basePrice: 2.50, unit: '1L', category: 'casa' },
            'carta igienica': { basePrice: 4.00, unit: '8 rotoli', category: 'casa' },
            'shampoo': { basePrice: 3.50, unit: '250ml', category: 'igiene' }
        };

        this.italianZipCodes = {
            // Milano e provincia
            '20121': { city: 'Milano', region: 'Lombardia', province: 'MI' },
            '20122': { city: 'Milano', region: 'Lombardia', province: 'MI' },
            '20123': { city: 'Milano', region: 'Lombardia', province: 'MI' },
            '20124': { city: 'Milano', region: 'Lombardia', province: 'MI' },
            '20125': { city: 'Milano', region: 'Lombardia', province: 'MI' },
            
            // Roma e provincia
            '00118': { city: 'Roma', region: 'Lazio', province: 'RM' },
            '00119': { city: 'Roma', region: 'Lazio', province: 'RM' },
            '00120': { city: 'Roma', region: 'Lazio', province: 'RM' },
            '00121': { city: 'Roma', region: 'Lazio', province: 'RM' },
            '00122': { city: 'Roma', region: 'Lazio', province: 'RM' },
            
            // Napoli e provincia
            '80121': { city: 'Napoli', region: 'Campania', province: 'NA' },
            '80122': { city: 'Napoli', region: 'Campania', province: 'NA' },
            '80123': { city: 'Napoli', region: 'Campania', province: 'NA' },
            
            // Torino e provincia
            '10121': { city: 'Torino', region: 'Piemonte', province: 'TO' },
            '10122': { city: 'Torino', region: 'Piemonte', province: 'TO' },
            '10123': { city: 'Torino', region: 'Piemonte', province: 'TO' },
            
            // Bologna e provincia
            '40121': { city: 'Bologna', region: 'Emilia-Romagna', province: 'BO' },
            '40122': { city: 'Bologna', region: 'Emilia-Romagna', province: 'BO' },
            '40123': { city: 'Bologna', region: 'Emilia-Romagna', province: 'BO' },
            
            // Firenze e provincia
            '50121': { city: 'Firenze', region: 'Toscana', province: 'FI' },
            '50122': { city: 'Firenze', region: 'Toscana', province: 'FI' },
            '50123': { city: 'Firenze', region: 'Toscana', province: 'FI' }
        };
    }

    // Ricerca prodotti con fuzzy matching
    searchProduct(query) {
        const normalizedQuery = query.toLowerCase().trim();
        const matches = [];

        for (const [productName, productData] of Object.entries(this.products)) {
            const similarity = this.calculateSimilarity(normalizedQuery, productName);
            if (similarity > 0.3) { // Soglia di similarità
                matches.push({
                    name: productName,
                    data: productData,
                    similarity: similarity
                });
            }
        }

        return matches.sort((a, b) => b.similarity - a.similarity);
    }

    // Calcola similarità tra stringhe (algoritmo semplificato)
    calculateSimilarity(str1, str2) {
        if (str1 === str2) return 1;
        if (str1.includes(str2) || str2.includes(str1)) return 0.8;
        
        const words1 = str1.split(' ');
        const words2 = str2.split(' ');
        let matches = 0;
        
        words1.forEach(word1 => {
            words2.forEach(word2 => {
                if (word1 === word2 || word1.includes(word2) || word2.includes(word1)) {
                    matches++;
                }
            });
        });
        
        return matches / Math.max(words1.length, words2.length);
    }

    // Genera prezzi per tutti i supermercati
    async searchPrices(productQuery, zipCode) {
        // Simula latenza di rete
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

        const locationData = this.italianZipCodes[zipCode];
        if (!locationData) {
            throw new Error('CAP non valido o non supportato');
        }

        const productMatches = this.searchProduct(productQuery);
        if (productMatches.length === 0) {
            return [];
        }

        const bestMatch = productMatches[0];
        const results = [];

        // Genera risultati per ogni supermercato
        for (const [storeId, storeData] of Object.entries(this.stores)) {
            // Simula disponibilità del prodotto (90% di probabilità)
            if (Math.random() < 0.9) {
                const basePrice = bestMatch.data.basePrice;
                const finalPrice = basePrice * storeData.priceMultiplier * (0.9 + Math.random() * 0.2);
                
                results.push({
                    store: storeData.name,
                    logo: storeData.logo,
                    product: bestMatch.name,
                    price: finalPrice.toFixed(2),
                    pricePerUnit: `€${(finalPrice / this.extractNumericValue(bestMatch.data.unit)).toFixed(2)}/${this.getUnitType(bestMatch.data.unit)}`,
                    unit: bestMatch.data.unit,
                    category: bestMatch.data.category,
                    distance: this.generateDistance(),
                    address: this.generateAddress(locationData),
                    availability: Math.random() > 0.1 ? 'Disponibile' : 'Scorte limitate',
                    storeType: storeData.type
                });
            }
        }

        // Ordina per prezzo crescente
        results.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        
        // Marca il miglior prezzo
        if (results.length > 0) {
            results[0].isBestPrice = true;
        }

        return results;
    }

    // Trova supermercati nelle vicinanze
    async findNearbyStores(zipCode) {
        await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));

        const locationData = this.italianZipCodes[zipCode];
        if (!locationData) {
            throw new Error('CAP non valido o non supportato');
        }

        const stores = [];
        const storeTypes = {
            'premium': ['esselunga'],
            'standard': ['coop', 'conad'],
            'hypermarket': ['carrefour', 'iper'],
            'discount': ['lidl', 'eurospin']
        };

        // Genera 4-6 supermercati casuali
        const numStores = 4 + Math.floor(Math.random() * 3);
        const selectedStores = [];

        // Assicurati di avere almeno un supermercato per tipo
        Object.values(storeTypes).forEach(typeStores => {
            if (selectedStores.length < numStores) {
                const randomStore = typeStores[Math.floor(Math.random() * typeStores.length)];
                selectedStores.push(randomStore);
            }
        });

        // Riempi con supermercati casuali
        while (selectedStores.length < numStores) {
            const allStoreIds = Object.keys(this.stores);
            const randomStore = allStoreIds[Math.floor(Math.random() * allStoreIds.length)];
            if (!selectedStores.includes(randomStore)) {
                selectedStores.push(randomStore);
            }
        }

        selectedStores.forEach(storeId => {
            const storeData = this.stores[storeId];
            stores.push({
                name: storeData.name,
                logo: storeData.logo,
                type: this.getStoreTypeLabel(storeData.type),
                distance: this.generateDistance(),
                address: this.generateAddress(locationData),
                openingHours: this.generateOpeningHours(),
                phone: this.generatePhoneNumber(),
                services: this.generateServices(storeData.type)
            });
        });

        // Ordina per distanza
        stores.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));

        return stores;
    }

    // Funzioni di utilità
    extractNumericValue(unit) {
        const match = unit.match(/(\d+(?:\.\d+)?)/);
        return match ? parseFloat(match[1]) : 1;
    }

    getUnitType(unit) {
        if (unit.includes('kg')) return 'kg';
        if (unit.includes('L')) return 'L';
        if (unit.includes('g')) return '100g';
        if (unit.includes('ml')) return '100ml';
        return 'unità';
    }

    generateDistance() {
        return (Math.random() * 4 + 0.3).toFixed(1) + ' km';
    }

    generateAddress(locationData) {
        const streets = ['Via Roma', 'Via Milano', 'Corso Italia', 'Piazza Garibaldi', 'Viale Europa', 'Via Nazionale', 'Corso Vittorio Emanuele'];
        const street = streets[Math.floor(Math.random() * streets.length)];
        const number = Math.floor(Math.random() * 200) + 1;
        return `${street} ${number}, ${locationData.city}`;
    }

    getStoreTypeLabel(type) {
        const labels = {
            'premium': 'Supermercato Premium',
            'standard': 'Supermercato',
            'hypermarket': 'Ipermercato',
            'discount': 'Discount'
        };
        return labels[type] || 'Supermercato';
    }

    generateOpeningHours() {
        const options = [
            '8:00 - 21:00',
            '8:30 - 20:30',
            '9:00 - 22:00',
            '7:30 - 21:30'
        ];
        return options[Math.floor(Math.random() * options.length)];
    }

    generatePhoneNumber() {
        return `0${Math.floor(Math.random() * 9) + 1} ${Math.floor(Math.random() * 9000000) + 1000000}`;
    }

    generateServices(storeType) {
        const allServices = ['Parcheggio', 'Farmacia', 'Panetteria', 'Macelleria', 'Pescheria', 'Consegna a domicilio', 'Self-checkout'];
        const servicesByType = {
            'premium': 6,
            'hypermarket': 7,
            'standard': 4,
            'discount': 2
        };
        
        const numServices = servicesByType[storeType] || 3;
        const shuffled = allServices.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numServices);
    }

    // Ottimizzazione lista spesa
    async optimizeShoppingList(shoppingList, zipCode) {
        await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));

        const locationData = this.italianZipCodes[zipCode];
        if (!locationData) {
            throw new Error('CAP non valido');
        }

        const optimizedItems = [];
        let totalSavings = 0;
        let totalCost = 0;

        for (const item of shoppingList) {
            try {
                const priceResults = await this.searchPrices(item.product, zipCode);
                if (priceResults.length > 0) {
                    const bestPrice = priceResults[0];
                    const itemCost = parseFloat(bestPrice.price) * item.quantity;
                    const avgPrice = priceResults.reduce((sum, result) => sum + parseFloat(result.price), 0) / priceResults.length;
                    const savings = (avgPrice - parseFloat(bestPrice.price)) * item.quantity;

                    optimizedItems.push({
                        ...item,
                        bestPrice: bestPrice.price,
                        bestStore: bestPrice.store,
                        bestStoreAddress: bestPrice.address,
                        totalCost: itemCost,
                        savings: savings,
                        found: true
                    });

                    totalCost += itemCost;
                    totalSavings += savings;
                } else {
                    optimizedItems.push({
                        ...item,
                        found: false
                    });
                }
            } catch (error) {
                optimizedItems.push({
                    ...item,
                    found: false,
                    error: error.message
                });
            }
        }

        // Raggruppa per supermercato per ottimizzare il percorso
        const storeGroups = {};
        optimizedItems.filter(item => item.found).forEach(item => {
            if (!storeGroups[item.bestStore]) {
                storeGroups[item.bestStore] = [];
            }
            storeGroups[item.bestStore].push(item);
        });

        const route = Object.entries(storeGroups).map(([store, items]) => ({
            store: store,
            address: items[0].bestStoreAddress,
            items: items.length,
            products: items.map(item => item.product)
        }));

        return {
            optimizedItems: optimizedItems,
            totalCost: totalCost,
            totalSavings: totalSavings,
            route: route,
            estimatedTime: route.length * 15 + 10 // 15 min per negozio + 10 min viaggio
        };
    }
}

// Esporta per uso globale
if (typeof window !== 'undefined') {
    window.PriceSearchAPI = PriceSearchAPI;
}