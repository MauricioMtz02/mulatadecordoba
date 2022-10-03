import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const Editor = ({value, handleContent}) => {
    return (
        <div>
            <CKEditor
                editor={ ClassicEditor }
                data={value}
                config={ {
                    toolbar: [ 'heading', '|', 'bold', 'italic', 'blockQuote', 'link' ],
                    heading: {
                        options: [
                            { model: 'paragraph', title: 'Parrafo', class: 'ck-heading_paragraph' },
                            { model: 'heading1', view: 'h1', title: 'Título 2', class: 'ck-heading_heading1' },
                            { model: 'heading3', view: 'h3', title: 'Título 3', class: 'ck-heading_heading3' }
                        ]
                    }
                } }
                onBlur={ ( event, editor ) => {
                    const data = editor.getData()
                    handleContent(data)
                } }
                onError={ ( error, { willEditorRestart } ) => {
                    // If the editor is restarted, the toolbar element will be created once again.
                    // The `onReady` callback will be called again and the new toolbar will be added.
                    // This is why you need to remove the older toolbar.
                    console.log('el editor falló', error)

                    if ( willEditorRestart ) {
                        this.editor.ui.view.toolbar.element.remove();
                    }
                } }
            />
            
        </div>
    )
}

export default Editor