import styled from 'vue-styled-components'


export const Content = styled.div`

    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f4f5f7;

    .bin2-block-input {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;

    }

    .bin2-span {
        color: #00974b;
        padding: 0 10px;
    }


    .bin2-result-block {
        width: 150px; 
        height: 100%;      
        display: flex;
        align-items: center;
        justify-content: space-around; 
        margin: 10px 0; 


        .bin-resulttitle {
            color: #5d5d5d;
        }

        .bin2-result {
            width: 45%;
            text-align: center;
        }

    }

    .bin2-input-box {

        display: flex;
        flex-direction: column;
        justify-content: start;

        .bin-input-custom {
            border: 1px solid #0080c0;
            border-radius: 3px;
            padding: 4px 10px;
            font-size: .9rem;
        }


    }

    .bin2-inputWarning {
        height: 25px;
        font-size: .9rem;
        color: red;
    }

    .bin2-title {
        font-size: 3rem;
        margin-bottom: 0.1rem;
    }

`;