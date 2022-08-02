import styled from "styled-components";


export const UploadContainer = styled.div`
    background-color: #edf2f7;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px dashed #cbd5e0;
    background-color: #edf2f7;
    min-width: 380px;
    min-height: 230px;
}

`
export const InputWrapper = styled.div`
    position: relative;
    margin-bottom: 1.5em;
`

export const UploadInput = styled.input`
        position: relative;
        text-align: right;
        opacity: 0;
        z-index: 2;
        cursor: pointer;
        height: 46px;
        max-width: 200px;
}
`

export const UploadButton = styled.button`
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        color: #fff;
        background-color: #f55e30;
        font-size: 1.1rem;
        cursor: pointer;
        border-radius: 4px;
        border: none;
        outline: none;
        // padding: 1em;
        transition: background-color 0.4s;
        box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.5);

        i {
            width: 1.5em;
            height: 1.5em;
            padding: 0.4em;
            background-color: #fff;
            color: #f55e30;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.8em;
            font-size: 0.8em;
        }
        &:hover {
            button {
                background-color: #f15120;
            }
        }

`