import { TextField } from "@mui/material";
import { WidgetProps } from "@rjsf/utils";

export const TextAreaWrapper = (props: WidgetProps): JSX.Element => {
    const onChange = (event: any) => {
        props.onChange(event.target.value);
    };

    return (
        <TextField
            id={props.options.widgetTitle + "-textAreaWidget"}
            label={`${props.options.widgetTitle as string} ${props.required ? "*" : ""}`}
            value={props.value ?? ""}
            onChange={onChange}
            placeholder={(props.options.placeholderText as string) ?? ""}
            error={props.rawErrors && props.rawErrors.length > 0}
            multiline={true}
            minRows={5}
        />
    );
};
