const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();

// Gera o QR Code para login
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// Quando estiver pronto
client.on('ready', () => {
    console.log('Chatbot da ICNG RAIO HKW conectado com sucesso!');
});

// Função delay
const delay = ms => new Promise(res => setTimeout(res, ms));

// Inicia o bot
client.initialize();

// Responde mensagens
client.on('message', async msg => {
    const texto = msg.body.toLowerCase(); // transforma tudo em minúsculas
    const chat = await msg.getChat();

            // Respostas para RAIO

    // Resposta para categoria: PARTE DE CIMA
    if (texto.includes('parte de cima')&& texto.includes('raio')) {
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '✨Você escolheu a categoria *Parte de Cima* da RAIO.✨');
        await delay(3000);
        await client.sendMessage(msg.from, 'Acesse:🔗https://sites.google.com/view/raiodrop/best-sellers/parte-de-cima');
        await delay(3000);
        await client.sendMessage(msg.from, 'Eu me chamo *Izabel Cristina*🤠, qual é o seu nome? vamos trocar contatos?');

        return;
    }

    // Resposta para categoria: PARTE DE BAIXO
    if (texto.includes('parte de baixo')&& texto.includes('raio')) {
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '✨Você escolheu a categoria *Parte de Baixo* da RAIO.✨');
        await delay(3000);
        await client.sendMessage(msg.from, 'Acesse:🔗https://sites.google.com/view/raiodrop/best-sellers/parte-de-baixo');
        await delay(3000);
        await client.sendMessage(msg.from, 'Eu me chamo *Izabel Cristina*🤠, qual é o seu nome? vamos trocar contatos?');

        return;
    }

    // Resposta para categoria: CORPO TODO
    if (texto.includes('corpo todo')&& texto.includes('raio')) {
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '✨Você escolheu a categoria *Corpo Todo* da RAIO.✨');
        await delay(3000);
        await client.sendMessage(msg.from, 'Acesse:🔗https://sites.google.com/view/raiodrop/best-sellers/corpo-todo');
        await delay(3000);
        await client.sendMessage(msg.from, 'Eu me chamo *Izabel Cristina*🤠, qual é o seu nome? vamos trocar contatos?');

        return;
    }

    // Resposta para categoria: ACESSÓRIOS
    if (texto.includes('acessórios')&& texto.includes('raio')) {
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '✨Você escolheu a categoria *Acessórios* da RAIO.✨');
        await delay(3000);
        await client.sendMessage(msg.from, 'Acesse:🔗https://sites.google.com/view/raiodrop/best-sellers/acessorios');
        await delay(3000);
        await client.sendMessage(msg.from, 'Eu me chamo *Izabel Cristina*🤠, qual é o seu nome? vamos trocar contatos?');

        return;
    }

    // Resposta para: COLEÇÃO COMPLETA / BEST SELLERS
if ((texto.includes('coleção completa') || texto.includes('best sellers')) && texto.includes('raio')) {
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '✨Você escolheu a *Coleção Completa Best Sellers* da RAIO.✨');
        await delay(3000);
        await client.sendMessage(msg.from, 'Acesse:🔗https://sites.google.com/view/raiodrop/best-sellers');
        await delay(3000);
        await client.sendMessage(msg.from, 'Eu me chamo *Izabel Cristina*🤠, qual é o seu nome? vamos trocar contatos?');

        return;
    }

        // Respostas para ICNG

        // ICNG - Categoria: BOCA
    if (texto.includes('icng') && texto.includes('boca')) {
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '🌷Você escolheu a categoria *Boca* da ICNG.🌷');
        await delay(3000);
        await client.sendMessage(msg.from, 'Acesse:🔗https://sites.google.com/view/icngdrop/boca');
        await delay(3000);
        await client.sendMessage(msg.from, 'Eu me chamo *Izabel Cristina*🤠, qual é o seu nome? vamos trocar contatos?');

        return;
    }

    // ICNG - Categoria: OLHOS
    if (texto.includes('icng') && texto.includes('olhos')) {
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '🌷Você escolheu a categoria *Olhos* da ICNG.🌷');
        await delay(3000);
        await client.sendMessage(msg.from, 'Acesse:🔗https://sites.google.com/view/icngdrop/olhos');
        await delay(3000);
        await client.sendMessage(msg.from, 'Eu me chamo *Izabel Cristina*🤠, qual é o seu nome? vamos trocar contatos?');

        return;
    }

    // ICNG - Categoria: ROSTO
    if (texto.includes('icng') && texto.includes('rosto')) {
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '🌷Você escolheu a categoria *Rosto* da ICNG.🌷');
        await delay(3000);
        await client.sendMessage(msg.from, 'Acesse:🔗https://sites.google.com/view/icngdrop/rosto');
        await delay(3000);
        await client.sendMessage(msg.from, 'Eu me chamo *Izabel Cristina*🤠, qual é o seu nome? vamos trocar contatos?');

        return;
    }

    // ICNG - Categoria: CABELO
    if (texto.includes('icng') && texto.includes('cabelo')) {
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '🌷Você escolheu a categoria *Cabelo* da ICNG.🌷');
        await delay(3000);
        await client.sendMessage(msg.from, 'Acesse:🔗https://sites.google.com/view/icngdrop/cabelo');
        await delay(3000);
        await client.sendMessage(msg.from, 'Eu me chamo *Izabel Cristina*🤠, qual é o seu nome? vamos trocar contatos?');

        return;
    }

    // ICNG - Categoria: BEST SELLERS
    if (texto.includes('icng') && (texto.includes('best sellers') || texto.includes('coleção completa'))) {
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '🌷Você escolheu a *Coleção Best Sellers* da ICNG.🌷');
        await delay(3000);
        await client.sendMessage(msg.from, 'Acesse:🔗https://sites.google.com/view/icngdrop/best-sellers');
        await delay(3000);
        await client.sendMessage(msg.from, 'Eu me chamo *Izabel Cristina*🤠, qual é o seu nome? vamos trocar contatos?');

        return;
    }

    // Respostas para HKW (Hello Kitty White)

// Resposta para categoria: MODA E ACESSÓRIOS
if (texto.includes('moda e acessórios') || texto.includes('moda e acessorios')) {
    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, '🎀Você escolheu a categoria *Moda e Acessórios* da HKW.🎀');
    await delay(3000);
    await client.sendMessage(msg.from, 'Acesse:🔗 https://sites.google.com/view/hkwdrop/best-sellers/moda-e-acessorios');
    await delay(3000);
    await client.sendMessage(msg.from, 'Eu me chamo *Izabel Cristina*🤠, qual é o seu nome? vamos trocar contatos?');

    return;
}

// Resposta para categoria: BELEZA E COSMÉTICOS
if (texto.includes('beleza e cosméticos') || texto.includes('beleza e cosmeticos')) {
    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, '🎀Você escolheu a categoria *Beleza e Cosméticos* da HKW.🎀');
    await delay(3000);
    await client.sendMessage(msg.from, 'Acesse:🔗 https://sites.google.com/view/hkwdrop/best-sellers/beleza-e-cosmeticos');
    await delay(3000);
    await client.sendMessage(msg.from, 'Eu me chamo *Izabel Cristina*🤠, qual é o seu nome? vamos trocar contatos?');

    return;
}

// Resposta para categoria: CASA E DECORAÇÃO
if (texto.includes('casa e decoração') || texto.includes('casa e decoracao')) {
    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, '🎀Você escolheu a categoria *Casa e Decoração* da HKW.🎀');
    await delay(3000);
    await client.sendMessage(msg.from, 'Acesse:🔗 https://sites.google.com/view/hkwdrop/best-sellers/casa-e-decoracao');
    await delay(3000);
    await client.sendMessage(msg.from, 'Eu me chamo *Izabel Cristina*🤠, qual é o seu nome? vamos trocar contatos?');

    return;
}

// Resposta para: COLEÇÃO COMPLETA / BEST SELLERS
if ((texto.includes('best sellers') || texto.includes('coleção completa')) && texto.includes('hkw')) {
    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, '🎀Você escolheu a *Coleção Completa Best Sellers* da HKW.🎀');
    await delay(3000);
    await client.sendMessage(msg.from, 'Acesse:🔗 https://sites.google.com/view/hkwdrop/best-sellers');
    await delay(3000);
    await client.sendMessage(msg.from, 'Eu me chamo *Izabel Cristina*🤠, qual é o seu nome? vamos trocar contatos?');
}

});