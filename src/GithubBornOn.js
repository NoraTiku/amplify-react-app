import { API } from 'aws-amplify';
import {useEffect, useState} from 'react';

export const GithubBornOn = () => {
    
    const [bornOnInfo, setBornOnDate] = useState({
      login: "<login>"
      , created_at: "<created_at>"
    });

    const fetchGitHubBornOnInfo = async () => {

        try {
            const data = await API.get(
                'cryptoapi22s'
                , '/born'
            );

            setBornOnDate(data.bornOnInfo);
        }
        catch (err) {
            setBornOnDate({
                login: "<error>"
                , created_at: "<error>"
            });
        }
    };

    useEffect(
        () => fetchGitHubBornOnInfo()
        , []
    );
    
    return (
        <h3>
            {bornOnInfo.login} - {bornOnInfo.created_at}
        </h3>
    );
};

