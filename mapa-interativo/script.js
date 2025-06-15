document.addEventListener('DOMContentLoaded', function () {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Animação suave para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    // Login e Cadastro
    document.addEventListener('DOMContentLoaded', function () {
        // Elementos
        const registerBtn = document.getElementById('register-btn');
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Criar Nova Conta</h2>
            <form class="register-form">
                <div class="input-group">
                    <label for="reg-name">Nome Completo</label>
                    <input type="text" id="reg-name" placeholder="Seu nome" required>
                </div>
                <div class="input-group">
                    <label for="reg-email">E-mail</label>
                    <input type="email" id="reg-email" placeholder="seu@email.com" required>
                </div>
                <div class="input-group">
                    <label for="reg-password">Senha</label>
                    <input type="password" id="reg-password" placeholder="••••••••" required>
                </div>
                <div class="input-group">
                    <label for="reg-confirm">Confirme a Senha</label>
                    <input type="password" id="reg-confirm" placeholder="••••••••" required>
                </div>
                <button type="submit" class="btn-register">Cadastrar</button>
            </form>
        </div>
    `;
        document.body.appendChild(modal);

        // Abrir modal de cadastro
        registerBtn.addEventListener('click', function (e) {
            e.preventDefault();
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Impede scroll da página
        });

        // Fechar modal
        modal.querySelector('.close-modal').addEventListener('click', function () {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        // Fechar ao clicar fora
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Validação do formulário de cadastro
        const registerForm = modal.querySelector('.register-form');
        if (registerForm) {
            registerForm.addEventListener('submit', function (e) {
                e.preventDefault();

                const password = document.getElementById('reg-password').value;
                const confirm = document.getElementById('reg-confirm').value;

                if (password !== confirm) {
                    alert('As senhas não coincidem!');
                    return;
                }

                // Aqui você pode adicionar a lógica de cadastro
                alert('Cadastro realizado com sucesso!');
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }

        // Validação do formulário de login
        const loginForm = document.querySelector('.login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', function (e) {
                e.preventDefault();

                // Aqui você pode adicionar a lógica de login
                const email = document.getElementById('email').value;
                alert(`Login realizado para: ${email}`);

                // Redirecionamento fictício
                // window.location.href = 'dashboard.html';
            });
        }
    });




    // Animação dos cards
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});