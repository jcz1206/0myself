

export default{
  data(){
    return {
      author:'jacky'
    }
  },
  render(){
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}