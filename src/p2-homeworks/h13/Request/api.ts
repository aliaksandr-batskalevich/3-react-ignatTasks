export const RequestsAPI = {
    post(success: boolean) {
        let body = {success};
        return fetch(`https://neko-cafe-back.herokuapp.com/auth/test`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(body)
        })
            .then(response => {
                if (response.ok) return response.json();
            })
            .catch(error => {
                console.warn(error);
            })
    }

}