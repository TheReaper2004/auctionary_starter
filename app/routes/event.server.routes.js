const events = require("../controllers/event.server.controllers");

module.exports = function (app) {

    app.route("/events")
        .get(events.get_all_events)
        .post(events.create_event);

    app.route("/events/:eventId")
        .get(events.get_event)
        .patch(events.update_event)
        .delete(events.delete_event);
};