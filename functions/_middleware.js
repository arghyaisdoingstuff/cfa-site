export async function onRequest(context) {
  const blockedPrefixes = [
    '46.151.182.',
    '64.226.65.',
    '207.154.197.',
    '139.59.132.',
    '209.38.208.',
    '146.70.117.',
    '176.119.150.',
    '2a01:4f8:c014:b22b:',
    '2a03:b0c0:3:d0:'
  ];
  
  const clientIP = context.request.headers.get('cf-connecting-ip');
  
  if (clientIP && blockedPrefixes.some(prefix => clientIP.startsWith(prefix))) {
    return new Response('Access Denied', { status: 403 });
  }
  
  return await context.next();
}