import { Customer, Drug } from '@/models';

export const customers: Customer[] = [
    {
        photo: 'maria-ph',
        id: 1,
        drugId: null,
        lang: {
            ru: {
                name: 'Марія',
                age: '19 років',
                desc: 'Бабуся приймає брендовий препарат від болю в суглобах, він допомагає,але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.',
            },
            en: {
                name: 'Maria',
                age: '19 years old',
                desc: 'Grandma takes a branded drug for joint pain, it helps, but too expensive. Do you have a quality analogue with a lower price? If not - give the brand.',
            }
        }
    },
    {
        photo: 'stepan-ph',
        id: 2,
        drugId: null,
        lang: {
            ru: {
                name: 'Степан',
                age: '61 рік',
                desc: 'Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?',
            },
            en: {
                name: 'Stepan',
                age: '61 years old',
                desc: 'When he woke up, he pushed the hot kettle away with his hand and got burned. Do you have all the medicines for burns so expensive? Can a good drug be inexpensive?',
            }
        },
    },
    {
        photo: 'lubov-ph',
        id: 3,
        drugId: null,
        lang: {
            ru: {
                name: 'Любов',
                age: '58 років',
                desc: 'Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.',
            },
            en: {
                name: 'Lubov',
                age: '58 years old',
                desc: 'The doctor prescribed a drug for hypertension, and the brand is expensive. Therefore, I need an analogue with good efficiency and a nice price.',
            }
        },
    },
    {
        photo: 'oleksandr-ph',
        id: 4,
        drugId: null,
        lang: {
            ru: {
                name: 'Олександр',
                age: '20 років',
                desc: 'Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.',
            },
            en: {
                name: 'Olexandr',
                age: '20 years old',
                desc: 'Recommend an effective remedy for sore throat at a reasonable price.',
            }
        },
    },
    {
        photo: 'iryna-ph',
        id: 5,
        drugId: null,
        lang: {
            ru: {
                name: 'Ірина',
                age: '55 років',
                desc: 'У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною.',
            },
            en: {
                name: 'Iryna',
                age: '55 years old',
                desc: 'I often have neuralgia, the doctor prescribed B vitamins. I need a quality analog at an affordable price.',
            }
        },
    },
];

export const drugs: Drug[] = [
    {
        id: 1,
        count: 0,
        color: '#8049C7',
        bgColor: 'linear-gradient(266.19deg, #8049C7 0%, #CA57FD 100%)',
        lang: {
            ru: {
                name: 'Препарат 1',
            },
            en: {
                name: 'Preparation 1',
            }
        }
    },
    {
        id: 2,
        count: 0,
        color: '#169AE4',
        bgColor: 'linear-gradient(266.19deg, #169AE4 0%, #0CC4FA 100%)',
        lang: {
            ru: {
                name: 'Препарат 2',
            },
            en: {
                name: 'Preparation 2',
            }
        }
    },
    {
        id: 3,
        count: 0,
        color: '#FFB903',
        bgColor: 'linear-gradient(90deg, #FFD748 0.02%, rgba(195, 199, 11, 0.96) 99.97%, #CAC6AB 99.98%, #D3E9E1 99.99%)',
        lang: {
            ru: {
                name: 'Препарат 3',
            },
            en: {
                name: 'Preparation 3',
            }
        }
    }
]
