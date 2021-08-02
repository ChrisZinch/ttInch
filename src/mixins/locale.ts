import Vue from 'vue';
import Component from 'vue-class-component';

declare interface Languages {
    options: object[];
    selected: {
        lang: string;
        label: string;
        id: number;
    };
}

@Component
export default class Locale extends Vue {
    langs: Languages = {
        options: [
            {
                lang: 'en',
                label: 'ENG',
                id: 1,
            },
            {
                lang: 'ru',
                label: 'РУС',
                id: 2,
            },
        ],
        selected: {
            lang: 'ru',
            label: 'РУС',
            id: 2,
        },
    };

    created() {
        if (localStorage.LangInch) {
            this.langs.selected = JSON.parse(localStorage.LangInch);
        }

        this.$i18n.locale = this.langs.selected.lang;
    }
}
