export async function onRequest(context) {
  const blockedIPs = [
    '46.151.182.93',
    '64.226.65.160',
    '207.154.197.113',
    '139.59.132.8',
    '209.38.208.202',
    '46.151.182.7',
    '146.70.117.177',
    '2a01:4f8:c014:b22b::1',
    '176.119.150.192',
    '2a03:b0c0:3:d0::1047:b001'
  ];
  
  const clientIP = context.request.headers.get('cf-connecting-ip');
  
  if (blockedIPs.includes(clientIP)) {
    return new Response('Access Denied', { status: 403 });
  }
  
  return await context.next();
}