#include <llapi/LoggerAPI.h>
#include "version.h"

extern Logger logger;

void PluginInit()
{
    logger.info("Hello, world!");
}
