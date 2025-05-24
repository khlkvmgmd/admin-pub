import React, { FC } from 'react'
import { CirclesProps, CirclesWithBar } from 'react-loader-spinner'
import s from './Loader.module.scss'
type TProps = {
	params: CirclesProps
}
const Loader: FC<TProps> = ({ params }) => {
	return (
		<div className={s.wrap}>
			<CirclesWithBar
				height="100"
				width="100"
				color="#84ce90"
				outerCircleColor="#84ce90"
				innerCircleColor="#84ce90"
				barColor="#84ce90"
				ariaLabel="circles-with-bar-loading"
				wrapperStyle={{}}
				wrapperClass=""
				{...params}
			/>
		</div>
	)
}

export default Loader
