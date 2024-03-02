export class BG3Item extends Item {
    /** @inheritdoc */
    prepareDerivedData() {
        super.prepareDerivedData();
        this.system.groups = this.system.groups || {};
        this.system.attributes = this.system.attributes || {};
        EntitySheetHelper.clampResourceValues(this.system.attributes);
    }

    /* -------------------------------------------- */

    /** @override */
    static async createDialog(data={}, options={}) {
        return EntitySheetHelper.createDialog.call(this, data, options);
    }

    /* -------------------------------------------- */

}