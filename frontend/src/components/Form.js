import "./styles/form.css"
const Form = ({ generateImgRequest, cleanImg, showSpinner }) => {
	const onFormSubmit = (e) => {
		e.preventDefault()
		const prompt = document.querySelector("#prompt").value
		const size = document.querySelector("#size").value
		if (prompt === "") {
			alert("Please add some text")
			return
		}
		generateImgRequest(prompt, size)
		generateImgRequest(prompt, size)
		generateImgRequest(prompt, size)
		showSpinner()
	}
	return (
		<section className='form-section'>
			<header className='form-header'>Img Generation</header>
			<h4>
				{'Using the '}
				<a
					href='https://beta.openai.com/docs/guides/images'
					target={"_blank"}
					rel='noreferrer'
				>
				    DALLE-2 API
				</a>
			</h4>
			<form className='form-control' onSubmit={(e) => onFormSubmit(e)}>
				<input
					type='text'
					id='prompt'
					className='form-input'
					placeholder='Enter your keywords to make a new img'
				/>
				<select
					name='size'
					className='form-select'
					placeholder='Select one Size'
					id='size'
				>
					<option value='small'>Small</option>
					<option value='medium'>Medium</option>
				</select>
				<button className='form-input submit' onClick={cleanImg}>
					Generate!
				</button>
			</form>
		</section>
	)
}
export default Form
