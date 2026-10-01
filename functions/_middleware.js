export async function onRequest(context) {
  const blockedIPs = [
    '46.151.182.93'
  ];
  
  const clientIP = context.request.headers.get('cf-connecting-ip');
  
  if (blockedIPs.includes(clientIP)) {
    return new Response('Access Denied', { status: 403 });
  }
  
  return await context.next();
}