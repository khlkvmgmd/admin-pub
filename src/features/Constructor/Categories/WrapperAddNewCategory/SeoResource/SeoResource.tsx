import React from 'react'
import { Input } from '@/libs/UI'
import { P } from '@/libs/UI/CustomTags'
import { useLang } from '@/libs/context/LocalLangContext/LocalLangContext'
import s from './SeoResource.module.scss'
import {
	TStateModalCat,
	THandleChangeFromParams,
} from '../../WrapperVariantResource/WrapperAddNewCategory/type'

type TProps = {
	formData: TStateModalCat
	handleChangeForm: ({ key, value, lang }: THandleChangeFromParams) => void
}

const SeoResource = ({ formData, handleChangeForm }: TProps) => {
	const { lang, handleChangeLang } = useLang()

	return (
		<div className={s.wrapForm}>
			<div className={s.seoCommon}>
				<Input
					placeholder="Title"
					placeholder_type="is_shown"
					value={formData.title}
					onChange={(e) =>
						handleChangeForm({
							key: 'title',
							value: e.target.value,
						})
					}
				/>
				<Input
					placeholder="Link"
					value={formData.link}
					placeholder_type="is_shown"
					onChange={(e) =>
						handleChangeForm({
							key: 'link',
							value: e.target.value,
						})
					}
				/>
			</div>
		</div>
	)
}

export default SeoResource
