import "./styles/form.css"
const Form = ({ generateImgRequest }) => {
  const onFormSubmit = (e) => {
    e.preventDefault()
    const prompt = document.querySelector("#prompt").value
    const size = document.querySelector("#size").value
    if (prompt === "") {
      alert("Please add some text")
      return
    }
    generateImgRequest(prompt, size)
  }
  return (
    <section className='form-section'>
      <header className='form-header'>Img Generation</header>
      <form className='form-control' onSubmit={(e) => onFormSubmit(e)}>
        <input
          type='text'
          id='prompt'
          className='form-input'
          placeholder='Enter your keywords to make a new img'
        />
        <select
          name='size'
          className='form-input'
          placeholder='Select one Size'
          id='size'
        >
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
        </select>
        <button className='form-input submit'>Submit</button>
      </form>
    </section>
  )
}
export default Form
