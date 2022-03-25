import React from 'react'
import { StyleRoot } from 'radium'
import PDFIcon from '../assets/images/pdf-icon.jpg'
import WordIcon from '../assets/images/word-icon.jpg'

import { connect } from  'react-redux'
import { addAttachments } from '../redux/actions/index'
import Axios from 'axios'

import * as Scroll from 'react-scroll';

//Document Viewer Dependencies
import FileViewer from 'react-file-viewer';

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAttachments: attachments => dispatch(addAttachments(attachments))
    }
}
class attachments extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            modalHidden: true,
            fileName: '',
            fileType: '',
            filePath: ''
        }
        this.scroll = Scroll.animateScroll;
    }

    componentWillMount(){
        if(!this.props.main.attachments){
            Axios({
                method: 'post',
                url: 'https://ap1.tylerthedeveloper.com/getAttachments'
            })
            .then(res => {
                this.props.addAttachments(res.data)
            })
        }
    }
    returnIcon = (type) => {
        switch(type){
            case 'docx':
                return {icon: WordIcon, alt: 'Word Icon'}
            case 'pdf':
                return {icon: PDFIcon, alt: 'PDF Icon'}
            default:
                return {icon: 'null', alt: 'Icon Missing'}
        }
    }
    handleDocumentClick = (event) => {
        var document_info = JSON.parse(event.currentTarget.id);
        console.log(document_info)
        this.setState({
            fileType: document_info.fileType,
            filePath: document_info.url,
            fileName: document_info.name,
            modalHidden: false
        })
        this.scroll.scrollToTop()
       
    }
    dismissModal = () => {
        this.setState({
            modalHidden: true
        })
    }
    onError(e) {
        console.log(e, 'error in file-viewer');
    }
    render(){
        var AnimationStyles = require('../utils/animation')
        return(
            <StyleRoot>
                {this.props.main.attachments ?
                <div style={AnimationStyles.styles.bounce_in_right}>
                    <h5 className="tittle">Attachments</h5>
                        {this.state.modalHidden ? <div/>:
                            <div class='modal-wrapper'>
                            <div className="modal-content-attachments">
                                <div className="modal-header">
                                <button type="button" className="close" onClick={this.dismissModal}>&times;</button>
                                <h4 className="modal-title">{this.state.fileName}</h4>
                                </div>
                                <div className="modal-body">
                                    <FileViewer
                                    fileType={this.state.fileType}
                                    filePath={this.state.filePath}
                                    onError={this.onError}/>
                                </div>
                                <div className="modal-footer">
                                <a href={this.state.filePath} target='__blank' className='btn btn-primary'>Download</a> 
                                <button type="button" className="btn btn-danger" onClick={this.dismissModal}>Close</button>
                        
                                </div>
                            </div>
                            </div>
                        }
                        <div className="attach bor-btm padding-25">
                            <ul>
                                {this.props.main.attachments.map(item =>{
                                    return(
                                        <li style={AnimationStyles.styles.zoom_in_up} key={item.name}>
                                            <p><img src={this.returnIcon(item.fileType)['icon']} alt={this.returnIcon(item.fileType)['alt']} />
                                            {item.name} <a href={item.url} target="_blank" rel="noopener noreferrer"><i className="fa fa-cloud-download" /></a> 
                                            <a href="javascript:void(0)" id={`${JSON.stringify(item)}`} onClick={this.handleDocumentClick}><i className="fa fa-eye" /></a></p>
                                        </li>
                                    )
                                })}
                            </ul>
                    </div>
                </div> : <div/>
                }
            </StyleRoot>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(attachments)