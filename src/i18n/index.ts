export const ui = {
    'en': {
        'header.title': 'Hello, I\'m Caio Vinícius',
        'header.description': 'When I\'m not coding, I enjoy researching new technologies or exploring new tools, but I can\'t miss some funny videos to distract myself, some songs to refresh my mind and play some games to relax... maybe...',

        'projects.title': 'Projects',
        'toys.title': 'Toys',
        'experiences.title': 'Experiences',

        'change-language_select.aria-label': 'Set Language'
    },
    'pt-br': {
        'header.title': 'Olá, Me chamo Caio Vinícius',
        'header.description': 'Quando não estou programando, gosto de pesquisar novas tecnologias ou explorar novas ferramentas, mas não posso perder alguns vídeos engraçados para me distrair, algumas músicas para refrescar a mente e jogar alguns jogos para relaxar... talvez...',

        'projects.title': 'Projetos',
        'toys.title': 'Projetos Divertidos',
        'experiences.title': 'Experiências',

        'change-language_select.aria-label': 'Escolher outra língua'
    }
} as const;

export type Lang = keyof typeof ui;
type TextCode = keyof typeof ui[Lang];

export const defaultLang = 'en';
export const allLangs = Object.keys(ui) as Lang[];
export const langs: Record<Lang, string> = {
    en: 'English',
    'pt-br': 'Português do Brasil'
}

export const useLang = (lang: Lang) => {
    return (textCode: TextCode) => ui[lang][textCode];
}