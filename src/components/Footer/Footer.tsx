/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { ChangeEventHandler, FC, useState } from 'react'
import Select from 'react-select'
import { useFormik } from 'formik'

import * as S from './styled'
import { Button } from '@/components/Ui/Button'

const options = [
    { value: 'section', label: 'Раздел' },
    { value: 'lesson', label: 'Урок' },
    { value: 'error', label: 'Ошибка' },
    { value: 'add', label: 'Хотел/а бы видеть' },
]

const selectStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'blue' : '',
        fontSize: 16,
        backgroundColor: state.isSelected ? '#eee' : '',
        textAlign: 'left',
        cursor: 'pointer',
    }),
    container: base => ({
        ...base,
        width: '100%',
    }),
    control: base => ({
        ...base,
        backgroundColor: 'rgba(0,0,0,0)',
        border: '1.6px solid #202020',
        height: 4,
        fontSize: 16,
        borderRadius: 8,
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
    }),
    dropdownIndicator: base => ({
        ...base,
        display: 'none',
    }),
    indicatorSeparator: base => ({
        ...base,
        display: 'none',
    }),
    valueContainer: base => ({
        ...base,
        padding: 0,
        paddingLeft: 12,
    }),
}

interface DropdownProps {
    value: string
    onChange: (e) => void
}
const Dropdown: FC<DropdownProps> = ({ value, onChange }) => {
    const [selectedOption, setSelectedOption] = useState(options[0])

    return (
        <Select
            styles={selectStyles}
            value={selectedOption}
            onChange={setSelectedOption}
            options={options}
        />
    )
}

export const Footer: FC = () => {
    const formik = useFormik({
        initialValues: {
            select: '',
            description: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <React.Fragment>
            <S.Feedback>
                <S.FeedbackWrapper>
                    <S.FeedbackContent>
                        <S.FeedbackTitle>Равнодушее — явно что-то не&nbsp;хорошее</S.FeedbackTitle>
                        <S.FeedbackBody>
                            Я хочу сделать этот продукт актуальным и доступным для каждого. Если ты
                            нашёл интересную статью, у тебя появилась идея для урока, заметил
                            какую-то неточность или устаревшую информацию, просто напиши сюда.
                        </S.FeedbackBody>
                        <S.Author>
                            <S.Copyright>©&nbsp;Автор&nbsp;проекта,&nbsp;2021</S.Copyright>
                            <a href="https://fekcl.com" style={{ textDecoration: 'none' }}>
                                <Button
                                    type={'Text'}
                                    title={'fEkcL.com'}
                                    leadingIcon={'ArrowRight'}
                                    textColor={'#689AFF'}
                                />
                            </a>
                        </S.Author>
                    </S.FeedbackContent>
                    <S.FeedbackForm>
                        <S.FeedbackFormTitle>Помоги стать лучше!</S.FeedbackFormTitle>
                        <S.Form onSubmit={formik.handleSubmit}>
                            <Dropdown onChange={formik.handleChange} value={formik.values.select} />
                            <S.Textarea
                                id="description"
                                name="description"
                                placeholder="Описание"
                                required
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            />
                            <S.Button type="submit">Отправить &#128073;</S.Button>
                        </S.Form>
                    </S.FeedbackForm>
                </S.FeedbackWrapper>
            </S.Feedback>
        </React.Fragment>
    )
}
