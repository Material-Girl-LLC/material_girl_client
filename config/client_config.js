window.client_config = {
    // Use https:// and wss:// for secure servers
    API_ROOT_URL:  `http://${window.location.hostname}:3030/server`,

    ROOT_PATH:  (() => {
        const script_path = (new URL(document.currentScript.src)).pathname;
        return script_path.replace(/\/config\/client_config\.js$/, '/');
    })()


};