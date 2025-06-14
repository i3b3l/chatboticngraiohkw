// Instale as dependências:
// npm install whatsapp-web.js qrcode-terminal

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(), // Salva a sessão automaticamente
});

// Gera QR code no terminal se não houver sessão salva
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Escaneie o QR code acima');
});

// Evento quando o bot está pronto
client.on('ready', () => {
    console.log('✅ Bot está online e pronto!');
});

// Evento quando recebe mensagem
client.on('message', message => {
    console.log(`📩 Mensagem recebida de ${message.from}: ${message.body}`);

    // Responde automaticamente 'Oi!' se alguém enviar 'Olá'
    if (message.body.toLowerCase() === 'olá') {
        message.reply('Oi! Tudo bem? Eu sou um bot 🤖');
    }
});

// Inicializa o bot
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
    
}

});