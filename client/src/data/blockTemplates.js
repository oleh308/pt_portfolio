const aboutTemplate = {
  key: 'aboutme',
  title: 'About me',
  blockTitle: {
    default: '',
    type: 'input',
    title: 'Section title'
  },
  quote1: {
    default: '',
    type: 'input',
    title: 'First quote'
  },
  quote2: {
    default: '',
    type: 'input',
    title: 'Second quote'
  },
  paragraphs: {
    default: '',
    type: 'array',
    arrayOf: 'textarea',
    title: 'Paragraphs'
  },
  points: {
    default: '',
    type: 'array',
    arrayOf: 'textarea',
    title: 'Story line'
  }
}

const templates = {
  home: [
    aboutTemplate
  ]
}

export default templates;
