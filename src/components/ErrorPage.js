import React from 'react'
import styled from 'styled-components'

const Whoops = styled.div`
	text-align: center;
	background-color: #fff;

	img {
		margin-top: 10%;
		height: 100%;
		width: 50%;
	}


`

export default function ErrorPage(){
	return (
		<Whoops>
			<img src="/images/flamenco-searching.png" alt="image by https://icons8.com" title="Image by Ouch.pics" />
			<h3>Hmm. We can't seem to find that page...</h3>
		</Whoops>
	)
}