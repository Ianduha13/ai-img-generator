import "./styles/form.css"
const Form = () => {
  return (
    <section className='form-section'>
      <header className='form-header'>Img Generation</header>
      <form className='form-control'>
        <input
          type='text'
          className='form-input'
          placeholder='Enter your keywords to make a new img'
        />
        <select
          name='size'
          className='form-input'
          placeholder='Select one Size'
        >
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
        </select>
        <input type='submit' className='form-input submit' value='Submit' />
      </form>
    </section>
  )
}
export default Form
