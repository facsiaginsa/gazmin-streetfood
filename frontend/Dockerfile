FROM nginx:stable-alpine

COPY * /app
COPY nginx.conf /etc/nginx/templates/nginx.conf.template

CMD envsubst "$(env | sed -e 's/=.*//' -e 's/^/\$/g')" < /etc/nginx/templates/nginx.conf.template > /etc/nginx/nginx.conf && nginx