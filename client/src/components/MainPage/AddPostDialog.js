import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import FormControl from '@material-ui/core/FormControl';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';

class AddPostDialog extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      author: "",
      post: "",
      open: false,
    };
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  };


  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };

  onSubmit = e => {
      e.preventDefault();

  const newPost = {
        author: this.props.author,
        authorID: this.props.authorID,
        post: this.state.post,
      };

      this.setState({
        post: ''
      })

  this.props.addPost(newPost); 
  this.toggle();
  };

  render() {
    const { fullScreen } = this.props;
    return (
      <div>
        <Button variant="outlined" align="center" color="inherit" paddingbottom="20px" onClick={this.toggle}>
          Ask a Question
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.toggle}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">Ask a Question</DialogTitle>
          <DialogContent>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="post">Enter Your Question</InputLabel>
              <Input 
                onChange={this.onChange}
                value={this.state.post}
                id="post" 
                name="post" 
                autoComplete="autoFocus"
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggle} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onSubmit} color="primary" autoFocus>
              Post It
            </Button>
          </DialogActions>
        </Dialog>
        </div>
    );
  }
}


AddPostDialog.propTypes = {
  addPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  postItem: state.postItem
});

export default connect(mapStateToProps, { addPost })(AddPostDialog);