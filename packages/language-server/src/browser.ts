import { BrowserMessageReader, BrowserMessageWriter, createConnection } from 'vscode-languageserver/browser';
import { startLanguageServer } from './server';

const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

const connection = createConnection(messageReader, messageWriter);

startLanguageServer(connection, {
	loadTypescript(options) {
		return undefined as any; // TODO: Full browser support
	},
	loadTypescriptLocalized(options) {
		return undefined;
	},
});
