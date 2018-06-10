import { workspace, WorkspaceConfiguration } from 'vscode';

export class UserSettings {
    config : WorkspaceConfiguration;

    constructor() {
        this.config = workspace.getConfiguration('emmet');
    }

    addTypeScriptToIncludedEmmetLanguages() {
        this.setIncludedLanguagesTypeScriptValue("html");
    }

    removeTypeScriptToIncludedEmmetLanguages() {
        this.setIncludedLanguagesTypeScriptValue(undefined);
    }

    private setIncludedLanguagesTypeScriptValue(value) {
        this.config.update("includeLanguages.typescript", value, true);
    }
}


