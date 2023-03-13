import * as S from './PostFormStyles'

function PostForm() {
    return (
        <S.FormWrapper>
            <div className="col">
                <label htmlFor="input">Title</label>
                <input type="text" name='input' />
            </div>
            <button disabled type="submit">Submit</button>
        </S.FormWrapper>
    )
}

export default PostForm