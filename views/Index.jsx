const React         = require("react");
const DefaultLayout = require("./layouts/Default");


class Index extends React.Component {
    render() {
        const { logs } = this.props;
        return(
            <DefaultLayout title="All Logs">
                <a href="/logs/new">Create New Log</a>

                <ul>
                    {
                        logs.map((log, i) => {
                            return(
                                <li key = {i}>
                                    <a href={`/logs/${log._id}`}>{log.title}</a><br />
                                    
                                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <a href={`/logs/${log._id}/edit`}><button type="button">Edit Log</button></a>
                                        <input type="submit" value="Delete Log" />
                                    </form><br />
                                </li>
                            )
                        })
                    }
                </ul>
            </DefaultLayout>
        )
    }
}


module.exports = Index;