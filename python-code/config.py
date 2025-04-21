import os

# Performance configurations
TENSORFLOW_CONFIG = {
    'TF_ENABLE_ONEDNN_OPTS': '1',
    'TF_XLA_FLAGS': '--tf_xla_cpu_global_jit',
    'TF_NUM_INTEROP_THREADS': '4',
    'TF_NUM_INTRAOP_THREADS': '4'
}

# Apply TensorFlow configurations
for key, value in TENSORFLOW_CONFIG.items():
    os.environ[key] = value

# Flask configurations
FLASK_CONFIG = {
    'CACHE_TYPE': 'simple',
    'CACHE_DEFAULT_TIMEOUT': 300,
    'PREFERRED_URL_SCHEME': 'http',
    'TEMPLATES_AUTO_RELOAD': False,
    'DEBUG': False
}

# MongoDB configurations
MONGO_CONFIG = {
    'maxPoolSize': 50,
    'waitQueueTimeoutMS': 2500,
    'connectTimeoutMS': 2500,
    'retryWrites': True
}
