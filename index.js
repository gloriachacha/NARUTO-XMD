const { default: makeWASocket, DisconnectReason, useMultiFileAuthState } = require('@adiwajshing/baileys');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const path = require('path');
const config = require('./config');
const messageHandler = require('./messageHandler');

const authFolder = './auth_info';
if (!fs.existsSync(authFolder)) {
  fs.mkdirSync(authFolder);
}

const { state, saveCreds } = useMultiFileAuthState(authFolder);

const startSock = async () => {
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
  });

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
      if (lastDisconnect.error instanceof Boom && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
        startSock();
      } else {
        console.log('Connection closed. You are logged out.');
      }
    } else if (connection === 'open') {
      console.log('Connected to WhatsApp!');
    }
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('messages.upsert', async (m) => {
    messageHandler(sock, m);
  });

  // Additional event listeners
  sock.ev.on('group-participants.update', async (update) => {
    console.log('Group participants updated:', update);
  });

  sock.ev.on('groups.update', async (update) => {
    console.log('Group updated:', update);
  });
};

startSock().catch((err) => console.error('Error starting bot:', err));

// Function to send a message
const sendMessage = async (jid, message) => {
  try {
    await sock.sendMessage(jid, { text: message });
    console.log(`Message sent to ${jid}: ${message}`);
  } catch (err) {
    console.error(`Error sending message to ${jid}:`, err);
  }
};

// Example usage:
// sendMessage('1234567890@s.whatsapp.net', 'Hello from bot!');