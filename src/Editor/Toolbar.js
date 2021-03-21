// Config options for toolbar in draftjs
export const config = {
  options: ['inline', 'blockType', 'list'],
  inline: {
    inDropdown: false,
    className: 'tool-button',
    options: ['bold', 'italic', 'underline', 'strikethrough'],
  },
  blockType: {
    inDropdown: true,
    options: ['Normal', 'H1', 'H2', 'H3', 'H4'],
    className: 'drop-button',
  },
  list: {
    inDropdown: false,
    className: 'tool-button',
    options: ['unordered', 'ordered'],
  },
};
