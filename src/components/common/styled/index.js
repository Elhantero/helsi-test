import styled from 'styled-components';

export const InputWithSwitchWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
		height: 50px;

    > label:last-child {
        position: absolute;
        right: -26px;
        top: 8px;
        background: white;
    }
`;

export const Container = styled.div`
	display: grid;
	width: 1260px;
	grid-template-columns: repeat(${props => (props.cols ? props.cols : 2)}, 1fr);
	grid-gap: 40px;
	margin-top: 40px;	
`;

export const PreBlock = styled.pre`
    position: relative;
    border: 1px solid #ccc;
    background: rgba(0, 0, 0, 0.1);
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
    padding: 20px;
`;

export const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;	
	width: 1260px;
	margin: 0 auto;
	gap: 20px;	
`;
