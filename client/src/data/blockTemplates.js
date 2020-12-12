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
    arrayOf: {
      value: '',
      type: 'textarea',
      title: ''
    },
    title: 'Paragraphs'
  },
  points: {
    values: [],
    type: 'array',
    title: 'Story line',
    arrayOf: {
      type: 'object',
      props: {
        title: {
          value: '',
          type: 'input',
          title: 'Title'
        },
        content: {
          value: '',
          type: 'textarea',
          title: ''
        }
      }
    }
  }
}

const programmeHomeTemplate = {
  key: 'programmehome',
  title: 'Programme at Home',
  blockTitle: {
    value: '',
    type: 'input',
    title: 'Programme title'
  },
  blockSubtitle: {
    value: '',
    type: 'input',
    title: 'Programme subtitle'
  },
  blockHeader: {
    value: '',
    type: 'input',
    title: 'Programme right header'
  },
  blockContent: {
    value: '',
    type: 'input',
    title: 'Programme brief'
  },
  points: {
    values: [],
    type: 'array',
    arrayOf: 'textarea',
    title: 'Description points'
  }
}

const commentTemplate = {
  key: 'comment',
  title: "Customer's comment",
  comment: {
    value: '',
    type: 'input',
    title: 'Comment'
  },
  clientName: {
    value: '',
    type: 'input',
    title: 'Client name'
  },
  clientName: {
    value: '',
    type: 'input',
    title: 'Client image URL'
  }
}

const templates = {
  home: [
    aboutTemplate,
    commentTemplate,
    programmeHomeTemplate
  ],
  keysMap: {
    aboutme: aboutTemplate,
    comment: commentTemplate,
    programmehome: programmeHomeTemplate
  }
}

export default templates;
