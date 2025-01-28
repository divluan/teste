
        const productsData = {
            mercado1: [
                { name: 'Arroz', price: 20.0, image: 'images/produtos/arroz/arroz.PNG' },
                { name: 'Feijão', price: 10.0, image: 'images/produtos/feijao/feijao.PNG' },
                { name: 'Feijão', price: 10.0, image: 'images/produtos/feijao/feijao.PNG' }
                
            ],
            mercado2: [
            { name: 'Arroz', price: 20.0, image: 'images/produtos/arroz/arroz.PNG' },
            { name: 'Feijão', price: 10.0, image: 'images/produtos/feijao/feijao.PNG' },
            { name: 'Feijão', price: 10.0, image: 'images/produtos/feijao/feijao.PNG' }
            
              
            ],
            mercado3: [
            { name: 'Arroz', price: 20.0, image: 'images/produtos/arroz/arroz.PNG' },
            ],
            
            mercado4: [
            { name: 'Arroz', price: 20.0, image: 'images/produtos/arroz/arroz.PNG' },
            ]

        };
       
        const cart = [];

        // Show products based on the selected market
        function showMarketProducts(market) {
            const productContainer = document.getElementById('product-container');
            productContainer.innerHTML = '';
            productsData[market].forEach((product) => {
                const div = document.createElement('div');
                div.className = 'produto';
                div.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>R$ ${product.price.toFixed(2)}</p>
                    <button onclick="addToCart('${product.name}', ${product.price})">Adicionar ao Carrinho</button>
                `;
                productContainer.appendChild(div);
            });
        }

        // Add product to the cart
        function addToCart(name, price) {
            cart.push({ name, price });
            updateCart();
        }





// Adiciona descrição da compra para a pagina de compra
function finalizarCompra() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    // Calcula a quantidade de produtos e o valor total
    const productCount = cart.length;
    const totalValue = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
    const marketType = currentMarket === 'mercado1' ? 'Mercado 1' : 'Mercado 2';
    const purchaseTime = new Date().toLocaleString(); // Pega o horário atual

    // Redireciona para a página de notificação com os dados via URL
    window.location.href = `zsuacompra.html?totalValue=${totalValue}&productCount=${productCount}&marketType=${marketType}&purchaseTime=${purchaseTime}`;
}
















        // Update the cart display
        function updateCart() {
            const cartContainer = document.querySelector('#cart-items');
            const cartTotal = document.querySelector('#cart-total');
            cartContainer.innerHTML = '';
            let total = 0;

            cart.forEach((item, index) => {
                const li = document.createElement('li');
                li.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)} 
                <button class="remove-btn" onclick="removeFromCart(${index})">Remover</button>`;
                cartContainer.appendChild(li);
                total += item.price;
            });

            cartTotal.textContent = total.toFixed(2);
        }

        // Remove product from the cart
        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }



        function showMarketProducts(market) {
            const productContainer = document.getElementById('product-container');
            productContainer.innerHTML = '';
        
            // Adicione a classe ativa ao mercado clicado
            const mercados = document.querySelectorAll('.mercado-item');
            mercados.forEach(mercado => {
                mercado.classList.remove('active'); // Remove a classe de todos
            });
        
            const selectedMarket = document.querySelector(`.mercado-item[onclick="showMarketProducts('${market}')"]`);
            if (selectedMarket) {
                selectedMarket.classList.add('active'); // Adiciona ao mercado selecionado
            }
        
            // Renderize os produtos do mercado
            productsData[market].forEach((product) => {
                const div = document.createElement('div');
                div.className = 'produto';
                div.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>R$ ${product.price.toFixed(2)}</p>
                    <button onclick="addToCart('${product.name}', ${product.price})">Adicionar ao Carrinho</button>
                `;
                productContainer.appendChild(div);
            });
        }
        


        
        /*  Bloqueio de seleção de produtos para um mercado só  */
        
        let currentMarket = null; // Armazena o mercado atual do carrinho

        // Show products based on the selected market
        function showMarketProducts(market) {
            const productContainer = document.getElementById('product-container');
            productContainer.innerHTML = '';
    
            // Adicione a classe ativa ao mercado clicado
            const mercados = document.querySelectorAll('.mercado-item');
            mercados.forEach(mercado => {
                mercado.classList.remove('active'); // Remove a classe de todos
            });
    
            const selectedMarket = document.querySelector(`.mercado-item[onclick="showMarketProducts('${market}')"]`);
            if (selectedMarket) {
                selectedMarket.classList.add('active'); // Adiciona ao mercado selecionado
            }
    
            // Renderize os produtos do mercado
            productsData[market].forEach((product) => {
                const div = document.createElement('div');
                div.className = 'produto';
                div.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>R$ ${product.price.toFixed(2)}</p>
                    <button onclick="addToCart('${product.name}', ${product.price}, '${market}')">Adicionar ao Carrinho</button>
                `;
                productContainer.appendChild(div);
            });
        }
    
        // Add product to the cart
        function addToCart(name, price, market) {
            if (currentMarket === null) {
                currentMarket = market; // Define o mercado atual ao adicionar o primeiro produto
            }
    
            if (currentMarket !== market) {
                alert("Você só pode adicionar produtos do mesmo mercado ao carrinho.");
                return;
            }
    
            cart.push({ name, price });
            updateCart();
        }
    











        
        // Update the cart display
        function updateCart() {
            const cartContainer = document.querySelector('#cart-items');
            const cartTotal = document.querySelector('#cart-total');
            cartContainer.innerHTML = '';
            let total = 0;
    
            cart.forEach((item, index) => {
                const li = document.createElement('li');
                li.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)} 
                <button class="remove-btn" onclick="removeFromCart(${index})">Remover</button>`;
                cartContainer.appendChild(li);
                total += item.price;
            });
    
            cartTotal.textContent = total.toFixed(2);
        }
    
        // Remove product from the cart
        function removeFromCart(index) {
            cart.splice(index, 1);
            if (cart.length === 0) {
                currentMarket = null; // Reseta o mercado atual quando o carrinho está vazio
            }
            updateCart();
        }








        








/*  Mensagem (Adicione produto apenas de 1 mercado)  */ 
        function addToCart(name, price, market) {
            const warningMessage = document.getElementById('warning-message');
        
            // Caso o carrinho esteja vazio, definir o mercado atual
            if (currentMarket === null) {
                currentMarket = market;
                warningMessage.style.display = 'none'; // Certifique-se de esconder o aviso
            }
        
            // Verificar se o mercado atual corresponde ao mercado do produto
            if (currentMarket !== market) {
                // Exibir mensagem de aviso
                warningMessage.style.display = 'block';
                warningMessage.textContent = "Você só pode adicionar produtos do mesmo mercado ao carrinho.";
                return;
            }
        
            // Adicionar o produto ao carrinho
            cart.push({ name, price });
            warningMessage.style.display = 'none'; // Ocultar o aviso se a adição for bem-sucedida
            updateCart();
        }
/*  ......................  */        








/*  Mensagem (Adicione produto apenas de 1 mercado)  */

// Adicionar produto ao carrinho
function addToCart(name, price, market) {
    const warningMessage = document.getElementById('warning-message');
    
    // Caso o carrinho esteja vazio, definir o mercado atual
    if (currentMarket === null) {
        currentMarket = market;
        warningMessage.style.display = 'none'; // Certifique-se de esconder o aviso
    }

    // Verificar se o mercado atual corresponde ao mercado do produto
    if (currentMarket !== market) {
        // Exibir mensagem de aviso
        warningMessage.style.display = 'block';
      

        // Ocultar a mensagem após 5 segundos
        setTimeout(() => {
            warningMessage.style.display = 'none';
        }, 10000); // 5000ms = 5 segundos

        return;
    }

    // Adicionar o produto ao carrinho
    cart.push({ name, price });
    warningMessage.style.display = 'none'; // Ocultar o aviso se a adição for bem-sucedida
    updateCart();
}






        // Search products
        function searchProducts() {
            const query = document.getElementById('search-input').value.toLowerCase();
            const allProducts = document.querySelectorAll('.produto');

            allProducts.forEach(product => {
                const productName = product.querySelector('h3').textContent.toLowerCase();
                if (productName.includes(query)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
            
        }
    
   
   
   
   
   
   
   
   
   
       

    document.addEventListener("DOMContentLoaded", () => {
        const marketStatus = document.getElementById("marketStatus");
        const closeMarketButton = document.getElementById("closeMarketButton");
        const openMarketButton = document.getElementById("openMarketButton");
      
        // Atualiza o estado e visibilidade dos botões
        function updateButtonVisibility() {
          const state = localStorage.getItem("mercadoEstado") || "Aberto";
      
          // Atualiza o texto do estado atual
          if (marketStatus) {
            marketStatus.textContent = `Estado atual: ${state}`;
          }
      
          // Controla a visibilidade dos botões
          if (state === "Aberto") {
            if (closeMarketButton) closeMarketButton.style.display = "inline-block";
            if (openMarketButton) openMarketButton.style.display = "none";
          } else if (state === "Fechado") {
            if (closeMarketButton) closeMarketButton.style.display = "none";
            if (openMarketButton) openMarketButton.style.display = "inline-block";
          }
        }
      
        // Fechar mercado
        if (closeMarketButton) {
          closeMarketButton.addEventListener("click", () => {
            localStorage.setItem("mercadoEstado", "Fechado");
            alert("O mercado foi fechado.");
            updateButtonVisibility();
          });
        }
      
        // Abrir mercado
        if (openMarketButton) {
          openMarketButton.addEventListener("click", () => {
            localStorage.setItem("mercadoEstado", "Aberto");
            alert("O mercado foi reaberto.");
            updateButtonVisibility();
          });
        }
      
        // Atualiza o estado inicial ao carregar a página
        updateButtonVisibility();
      
        // Atualiza o estado quando houver mudanças no localStorage
        window.addEventListener("storage", updateButtonVisibility);
      });
      

  