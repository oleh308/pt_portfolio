const aboutTemplate = {
  key: 'aboutme',
  title: 'About me',
  blockTitle: {
    value: '',
    type: 'input',
    title: 'Section title'
  },
  quote1: {
    value: '',
    type: 'input',
    title: 'First quote'
  },
  quote2: {
    value: '',
    type: 'input',
    title: 'Second quote'
  },
  paragraphs: {
    values: [],
    type: 'array',
    arrayOf: 'textarea',
    title: 'Paragraphs'
  },
  points: {
    values: [],
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
