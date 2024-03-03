import styles from './FormControl.module.css'

export const Textarea = ({input, meta, child, ...props}) => {

    const hasError = meta.touched && meta.error;
    
    return(
        <div className={styles.formControl +" "+ (hasError ? styles.error : '')}>
            <textarea {...input} {...props}></textarea>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, child, ...props}) => {

    const hasError = meta.touched && meta.error;
    
    return(
        <div className={styles.formControl +" "+ (hasError ? styles.error : '')}>
            <input {...input} {...props}></input>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}