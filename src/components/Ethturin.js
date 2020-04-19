import React, { useContext } from "react"
import styled from "@emotion/styled"
import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext"

const TableStyled = styled("table")`
	transform: scale(0.75);
	padding-top: 10vh;
	margin: 0 auto;
	display: block;
	border-spacing: 0px;
	font-size: 0;
	border: 0;
	td {
		padding: 0;
		font-size: 0;
	}

	.justify-content {
		display: grid;
		min-height: 240px;
		align-items: center;
		justify-content: center;
	}
`

const ClickZone = styled.img``

const Ethturin = () => {
	const { addFloatingSpace, currentFloatingSpaces } = useContext(
		FloatingSpaceContext
	)
	const space = currentFloatingSpaces

	const openInNewTab = (url) => {
		let win = window.open(url, "_blank")
		win.focus()
	}

	const featureNotHereYet = () => {
		alert("This feature is currently not available")
	}

	const poap = () => {
		if (space.indexOf("claim poap token") > -1) {
			window.alert(
				"To claim your POAP token paste your wallet address along with your role(s) at noncon (speaker, organizer, volunteer, attendee) in the #claim-poap-token discord channel and you will receive a PM with a link to redeem."
			)
		} else {
			window.alert(
				"To claim your POAP token paste your wallet address along with your role(s) at noncon (speaker, organizer, volunteer, attendee) in the #claim-poap-token discord channel and you will receive a PM with a link to redeem."
			)
			addFloatingSpace("claim poap token")
		}
	}

	return (
		<TableStyled id="Table_01">
			<tbody>
				<tr>
					<td colSpan="18">
						<img
							src={require("./images/ethturin-imagemap_01.png")}
							width="950"
							height="2"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="2"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td colSpan="2" rowSpan="2">
						<img
							src={require("./images/ethturin-imagemap_02.png")}
							width="250"
							height="107"
							alt=""
						/>
					</td>
					<td colSpan="6" rowSpan="2" className="click-zone">
						<img
							src={require("../img/ethturin-elements/sdg-workshop.png")}
							width="167"
							height="auto"
							alt=""
							onClick={() => addFloatingSpace("sdg-workshop")}
						/>
					</td>
					<td colSpan="10">
						<img
							src={require("./images/ethturin-imagemap_04.png")}
							width="533"
							height="17"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="17"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td colSpan="6" rowSpan="2">
						<img
							src={require("./images/ethturin-imagemap_05.png")}
							width="208"
							height="118"
							alt=""
						/>
					</td>
					<td colSpan="2" rowSpan="5" className="click-zone">
						<img
							src={require("../img/ethturin-elements/mentor-ring.png")}
							width="199"
							height="236"
							alt=""
							onClick={() => addFloatingSpace("mentor-ring")}
						/>
					</td>
					<td colSpan="2" rowSpan="4">
						<img
							src={require("./images/ethturin-imagemap_07.png")}
							width="126"
							height="216"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="90"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td rowSpan="14">
						<img
							src={require("./images/ethturin-imagemap_08.png")}
							width="28"
							height="490"
							alt=""
						/>
					</td>
					<td colSpan="2" rowSpan="6" className="click-zone">
						<img
							src={require("./images/ethturin-imagemap_09.png")}
							width="237"
							height="281"
							alt=""
							onClick={() => addFloatingSpace("stop-covid-19")}
						/>
					</td>
					<td colSpan="5" rowSpan="2">
						<img
							src={require("./images/spacer.gif")}
							width="152"
							height="56"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="28"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td colSpan="3" rowSpan="6" className="click-zone">
						<img
							src={require("../img/ethturin-elements/v-hackathon.png")}
							width="auto"
							height="274"
							alt=""
							onClick={() => addFloatingSpace("VHackathon ETH Turin")}
						/>
					</td>
					<td colSpan="3" rowSpan="4">
						<img
							src={require("./images/ethturin-imagemap_12.png")}
							width="64"
							height="252"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="28"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td colSpan="3" rowSpan="3">
						<img
							src={require("./images/ethturin-imagemap_13.png")}
							width="122"
							height="224"
							alt=""
						/>
					</td>
					<td colSpan="2" rowSpan="5">
						<img
							src={require("./images/spacer.gif")}
							width="30"
							height="246"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="70"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td rowSpan="8">
						<img
							src={require("./images/spacer.gif")}
							width="103"
							height="326"
							alt=""
						/>
					</td>
					<td rowSpan="11">
						<img
							src={require("./images/ethturin-imagemap_16.png")}
							width="23"
							height="364"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="20"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td rowSpan="10">
						<img
							src={require("./images/ethturin-imagemap_17.png")}
							width="62"
							height="344"
							alt=""
						/>
					</td>
					<td rowSpan="7" className="click-zone">
						<img
							src={require("../img/ethturin-elements/new-room.png")}
							width="auto"
							height="306"
							alt=""
							onClick={() => addFloatingSpace("new room")}
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="134"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td colSpan="2" rowSpan="3">
						<img
							src={require("./images/ethturin-imagemap_19.png")}
							width="99"
							height="87"
							alt=""
						/>
					</td>
					<td rowSpan="3"></td>
					<td rowSpan="3">
						<img
							src={require("./images/spacer.gif")}
							width="29"
							height="87"
							alt=""
						/>
					</td>
					<td colSpan="2" rowSpan="3">
						<img
							src={require("./images/ethturin-imagemap_22.png")}
							width="35"
							height="87"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="1"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td colSpan="2" rowSpan="8" className="click-zone">
						<img
							src={require("./images/ethturin-imagemap_23.png")}
							width="237"
							height="209"
							alt=""
							onClick={() => addFloatingSpace("livestream")}
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="21"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td colSpan="5" className="click-zone">
						<img
							src={require("../img/ethturin-elements/schedule.png")}
							width="100%"
							height="auto"
							alt=""
							onClick={() => addFloatingSpace("calendar")}
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="65"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td rowSpan="6">
						<img
							src={require("./images/ethturin-imagemap_25.png")}
							width="52"
							height="123"
							alt=""
						/>
					</td>
					<td colSpan="3" rowSpan="5" className="click-zone">
						<img
							src={require("../img/ethturin-elements/poap.png")}
							width="78"
							height="103"
							alt=""
							onClick={() => poap()}
						/>
					</td>
					<td colSpan="3">
						<img
							src={require("./images/ethturin-imagemap_27.png")}
							width="109"
							height="9"
							alt=""
						/>
					</td>
					<td colSpan="3" rowSpan="4" className="click-zone">
						<img
							src={require("../img/ethturin-elements/gitcoin.png")}
							width="107"
							height="86"
							alt=""
							onClick={() => addFloatingSpace("Gitcoin")}
						/>
					</td>
					<td rowSpan="6">
						<img
							src={require("./images/spacer.gif")}
							width="14"
							height="280"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="9"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td rowSpan="5">
						<img
							src={require("./images/ethturin-imagemap_30.png")}
							width="22"
							height="114"
							alt=""
						/>
					</td>
					<td className="click-zone justify-content">
						<img
							src={require("../img/ethturin-elements/discord-chat.png")}
							width="auto"
							height="auto"
							alt=""
							onClick={() => addFloatingSpace("discord chat")}
						/>
					</td>
					<td rowSpan="5">
						<img
							src={require("./images/spacer.gif")}
							width="18"
							height="114"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="69"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td rowSpan="4">
						<img
							src={require("./images/ethturin-imagemap_33.png")}
							width="69"
							height="45"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="7"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td colSpan="2" rowSpan="3">
						<img
							src={require("./images/spacer.gif")}
							width="240"
							height="38"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="1"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td colSpan="3" rowSpan="2">
						<img
							src={require("./images/spacer.gif")}
							width="107"
							height="37"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="17"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td colSpan="3">
						<img
							src={require("./images/ethturin-imagemap_36.png")}
							width="78"
							height="20"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="1"
							height="20"
							alt=""
						/>
					</td>
				</tr>
				<tr>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="28"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="222"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="15"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="52"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="47"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="23"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="8"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="22"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="69"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="18"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="57"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="29"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="21"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="14"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="62"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="137"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="103"
							height="1"
							alt=""
						/>
					</td>
					<td>
						<img
							src={require("./images/spacer.gif")}
							width="23"
							height="1"
							alt=""
						/>
					</td>
					<td></td>
				</tr>
			</tbody>
		</TableStyled>
	)
}

export default Ethturin
