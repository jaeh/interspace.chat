import React from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	color: ${(props) => props.theme.body};
	background: ${(props) => props.theme.background};
`

const EnterRoomName = styled.form`
	display: grid;
	grid-template-rows: auto;
	grid-row-gap: 0.5rem;
`

const InputStyled = styled.input`
	max-width: 250px;
`

const LabelStyled = styled.label`
	font-size: 18px;
	font-weight: 300;
	margin: 3rem;
	text-align: center;
	padding: 1rem;
	color: ${(props) => props.theme.body};
`

const Inner = styled.div`
	margin: 0 auto;
`

const ErrorStyled = styled.span`
	padding: 1rem;
	color: ${(props) => props.theme.body};
`

export default function LaunchNewRoom() {
	const { register, handleSubmit, errors } = useForm()

	const openInNewTab = (url) => {
		let win = window.open(url, "_blank")
		win.focus()
	}

	const onSubmit = (data) => {
		openInNewTab(`https://breakout.interspace.chat/${data.roomName}`)
	}

	return (
		<Container>
			<EnterRoomName onSubmit={handleSubmit(onSubmit)}>
				<LabelStyled htmlfor="roomName">
					What shall your room be called?
				</LabelStyled>
				<Inner>
					<InputStyled
						name="roomName"
						type="text"
						placeholder="Infinite Jest"
						ref={register({ required: true })}
					/>
					<InputStyled type="submit" />
				</Inner>
				{errors.roomName && <ErrorStyled>A room name is required.</ErrorStyled>}
			</EnterRoomName>
		</Container>
	)
}
