export default {
  styles: {
    global: {
      '#__next': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
      html: { scrollBehavior: 'smooth' },
      div: { whiteSpace: 'pre-line' },
      '::selection': { background: 'brand.primaryColor' },
      '::-moz-selection': { background: 'brand.primaryColor' },

      '.js-focus-visible :focus:not([data-focus-visible-added])': {
        outline: 'none',
        boxShadow: 'none',
      },
      '.editor': { border: '1px solid #d7d7d7' },
      '.editor .rdw-editor-main': { padding: '0 20px 10px' },
      '.jobDescription': { whiteSpace: 'pre-wrap' },
      '.jobDescription ul': {
        margin: '0 30px',
        padding: 0,
        whiteSpace: 'normal',
      },
      '.jobDescription li': {
        margin: 0,
        padding: 0,
        whiteSpace: 'normal',
      },
      '.jobDescription p': {
        margin: 0,
        padding: 0,
        whiteSpace: 'normal',
      },
      '.parse-container *': {
        fontWeight: 'normal !important',
        fontStyle: 'normal !important',
      },
      '.embed-container ': {
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
        maxWidth: '100%',
      },
      '.embed-container iframe, .embed-container object, .embed-container embed': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },
      '.codeBlock span': {
        whiteSpace: 'pre-wrap!important',
      },
      'span .boolean': {
        color: '#a48de0!important',
      },
      '.date-picker': {
        width: '100%!important',
        outline: 0,
        position: 'relative',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        msAppearance: 'none',
        appearance: 'none',
        WebkitTransition: 'all 0.2s',
        transition: 'all 0.2s',
        fontSize: '16px',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        height: '2.5rem',
        borderRadius: '0.375rem',
        border: '1px solid',
        borderColor: 'inherit',
        background: 'inherit',
      },
      '.selected': {
        color: '#000!important',
        borderBottom: '1px purple dotted',
        width: '100%',
        fontWeight: 'bold',
      },
      '.chakra-avatar:hover .upload-image': {
        display: 'flex !important',
      },
      '.quill .ql-editor': {
        minHeight: '120px',
        maxHeight: '220px',
        overflowY: 'auto',
        fontSize: '14px',
      },
      '.quill .ql-container.ql-snow': {
        padding: '4px',
      },
      '@media (min-width:62em)': {
        '.preview-quill .quill .ql-editor': {
          fontSize: '8px',
          padding: '4px',
        },
        '.preview-quill .quill .ql-toolbar': {
          padding: '0px 4px',
        },
        '.preview-quill .quill .ql-container.ql-snow': {
          padding: '4px',
        },
        '.preview-quill .quill .ql-toolbar .ql-formats button': {
          width: '20px',
          height: '24px',
        },
        '.preview-quill .quill .ql-toolbar .ql-formats button svg': {
          width: '10px',
        },
      },
      '@media (min-width:96em)': {
        '.preview-quill .quill .ql-editor': {
          fontSize: '12px',
          padding: '8px',
        },
        '.preview-quill .quill .ql-toolbar': {
          padding: '0px 8px',
        },
        '.preview-quill .quill .ql-container.ql-snow': {
          padding: '8px',
        },
        '.preview-quill .quill .ql-toolbar .ql-formats button': {
          width: '28px',
          height: '34px',
        },
        '.preview-quill .quill .ql-toolbar .ql-formats button svg': {
          width: '16px',
        },
      },
      '@media (min-width:125em)': {
        '.preview-quill .quill .ql-editor': {
          fontSize: '16px',
          padding: '12px',
        },
        '.preview-quill .quill .ql-toolbar': {
          padding: '0px 12px',
        },
        '.preview-quill .quill .ql-container.ql-snow': {
          padding: '12px',
        },
        '.preview-quill .quill .ql-toolbar .ql-formats button': {
          width: '40px',
          height: '48px',
        },
        '.preview-quill .quill .ql-toolbar .ql-formats button svg': {
          width: '22px',
        },
      },
      '.preview-quill .quill .ql-editor.ql-blank::before': {
        top: '5px',
        left: '7px'
      },
      '@-moz-document url-prefix()': {
        '.firefox-background': {
          background: 'rgb(211, 211, 211) !important'
        },
      },
      //




      '.react-datepicker-wrapper': {
        width: '100%',
      },
      // New Layout
      '&::-webkit-scrollbar': {
        width: 3,
      },
      '&::-webkit-scrollbar-track': {
        borderRadius: 5,
        backgroundColor: 'gray.300',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'brand.800',
        borderRadius: 5,
      },
    },
  },
};
