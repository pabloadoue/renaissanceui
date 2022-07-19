import validator from "validator";

export const Validator = {
    ...validator,
    notNull: (value: any) => {
        if (value === "null" || value === null) {
            return false;
        }
        return true;
    }
};

export default Validator;
